import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import "../assests/styles.css";
import { MailDetails } from "./MailDetails";

export const MailList = (props) => {
    const { inboxMails } = props;
    const history = useHistory();
    const [showDetail, setShowDetail] = useState({});

    useEffect(() => {
        if (inboxMails.length) {
            setShowDetail(inboxMails[0])
        }
    }, [inboxMails]);

    const viewMail = (mail) => {
        history.push(`/dashboard/${mail.time}`);
    }
    return (
        <div class={"mailListContainer"}>
            <ul >
                {inboxMails.length > 0 && (
                    inboxMails.map((mail, index) => (
                        <li class={"mailList"} key={mail.time + index} onClick={() => viewMail(mail)}>
                            <div>
                                <span>{mail.from}</span>
                                <span>{mail.subject}</span>
                                <p>{mail.message}</p>
                            </div>
                        </li>
                    ))
                )}
            </ul>
            {Object.keys(showDetail).length > 0 && (
                <MailDetails mailDetails={showDetail} inboxMails={inboxMails}/>
            )}
        </div>
    )
}

