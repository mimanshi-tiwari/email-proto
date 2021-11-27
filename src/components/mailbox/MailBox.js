import React, { useEffect, useState } from "react";
import axios from "axios";
import { MailList } from "./MailList";

export const MailBox = () => {
    const [inboxMails, setInboxMails] = useState([]);

    useEffect(() => {
        axios
            .get("/api/emails.json")
            .then((mailRes) => {
                setInboxMails(mailRes.data.data);
            })
            .catch((e) => {
                console.log(e);
                setInboxMails([]);
            });
    }, []);
    return (
        <div>
            <h1>MAILBOX</h1>
            <MailList inboxMails={inboxMails}/>
        </div>
    );
};

