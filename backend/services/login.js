import { con } from '../sqlConnect';

// פונקציה לקבלת סטטוס החיבור של היוזר
export function getLoginStatus(req, res) {
    if (req.session.user) {
        res.send({
            status: 'success',
            user: req.session.user,
        });
    } else {
        res.send({
            status: 'error',
        });
    }
}

export function logout(req, res) {
    // בהתנתקות אנחנו פשוט מוחקים את המשתנה של היוזר מהסשיין
    delete req.session.user;
    res.send();
}

export function login(req, res) {
    // בתור התחלה אנחנו מוחקים את המשתמש הנוכחי מהסשיין
    delete req.session.user;




    const sqlQuery = "SELECT * FROM `users` WHERE `userName`=? AND `password`=MD5(?)";
    // trim: פונקציה המנקה רווחים מצידי הטקסט
    const paramArr = [req.body.userName.trim(), req.body.password.trim()];

    con.query(sqlQuery, paramArr, (err, result) => {
        // אם יש שגיאה בשאליתה
        if (err) {
            console.log(err);

            req.session.attempts++;

            res.send({
                status: 'error',
                message: "שגיאה לא מוגדרת",
            });

            return;
        }

        // אם אין אף יוזר העונה לשאילתא
        if (!result.length) {
            req.session.attempts++;

            res.send({
                status: 'error',
                message: "שם משתמש או סיסמה לא נכונים",
            });
        } else {
            // אם החיבור הצליח
            // מנקים את המשנה שסופר נסיונות חיבור כושלים
            delete req.session.attempts;

            const user = result[0];
            req.session.user = user;

            res.send({
                status: 'success',
                user,
            });
        }
    });
}