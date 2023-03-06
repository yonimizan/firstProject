import { con } from "../sqlConnect";

export function getCustomers(req, res) {
    let isDeleted = 0;

    if (req.query.deleted) {
        isDeleted = 1;
    }

    con.query("SELECT * FROM `customers` WHERE `isDeleted` = ?", [isDeleted], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}


export function addCustomer(req, res) {
    con.query("INSERT INTO `customers` (`id`, `firstName`, `lastName`, `email`, `phone`) VALUES (?,?,?,?,?)", 
            [req.body.id, req.body.firstName, req.body.lastName, req.body.email, req.body.phone], (err, result) => {
        if (err) {
           
            console.log(err);
        }

            res.send(result);
        });
    };

    export function deleteCustomer(req, res) {
        con.query("UPDATE `customers` SET `isDeleted` = 1 WHERE `id` = ?", [req.params.id], (err, result) => {
            if (err) {
                console.log("יוני");
            }
    
            res.send();
        });
    }
    
    export function updateCustomer(req, res) {
        con.query("UPDATE `customers` SET `firstName` = ?, `lastName` = ?, `email` = ?, `phone` = ? WHERE `id` = ?",
               [req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.params.id], (err, result) => {
            if (err) {
                console.log(err);
            }
    
            res.send();
        });
    }

    export function getCustomer(req, res) {
        con.query("SELECT * FROM `customers` WHERE `id` = ?", [req.params.id], (err, result) => {
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
    
    

