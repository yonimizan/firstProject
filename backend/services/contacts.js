import { con } from "../sqlConnect";



export function addContact(req, res) {
    con.query("INSERT INTO `contacts` (`id`, `firstName`, `lastName`, `email`, `phone`, `address`) VALUES (?,?,?,?,?,?)", 
            [req.body.id, req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.address], (err, result) => {
        if (err) {
           
            console.log(err);
        }

            res.send(result);
        });
    };

    export function getContacts(req, res) {
        let isDeleted = 0;
    
        if (req.query.deleted) {
            isDeleted = 1;
        }
    
        con.query("SELECT * FROM `contacts` WHERE `isDeleted` = ?", [isDeleted], (err, result) => {
            if (err) {
                console.log(err);
            }
    
            res.send(result);
        });
    }

    
export function deleteContact(req, res) {
    con.query("UPDATE `contacts` SET `isDeleted` = 1 WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log("יוני");
        }

        res.send();
    });
}


export function updateContact(req, res) {
    con.query("UPDATE `contacts` SET `firstName` = ?, `lastName` = ?, `email` = ?, `phone` = ?, `address` = ?  WHERE `id` = ?",
           [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.address, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}


export function getContact(req, res) {
    con.query("SELECT * FROM `contacts` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length) {
            res.send(result[0]);
        } else {
            res.send();
        }
    });
}
