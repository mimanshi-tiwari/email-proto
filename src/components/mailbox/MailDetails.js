import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../assests/styles.css";

export const MailDetails = ({ mailDetails, inboxMails }) => {
    const [mailDetail, setMailDetails] = useState({});
    const [textValue, setTextValue] = useState("");
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            inboxMails.forEach(data => {
                // eslint-disable-next-line
                if (data.time == id) {
                    setMailDetails(data);
                }
            })
        } else if (mailDetails && Object.keys(mailDetails).length) {
            setMailDetails({
                time: mailDetails.time,
                message: mailDetails.message,
                from: mailDetails.from,
                replies: mailDetails.replies,
            });
        }
        // eslint-disable-next-line
    }, [id]);

    const handleChange = (e) => {
        e.preventDefault()
        const value = e.target.value;
        if (value.trim() !== "") setTextValue(value);
        else setTextValue("");
    };

    const handleReply = () => {
        const body = {
            from: mailDetail.from,
            message: textValue,
            time: new Date().getTime()
        }
        const newReplies = [...mailDetail.replies, body]
        const updatedDetails = JSON.parse(JSON.stringify(mailDetail));
        updatedDetails.replies = newReplies
        setMailDetails(updatedDetails)
        setTextValue("")
    };

    return (
        <>
            {Object.keys(mailDetail)?.length ? (
                <div >
                    <div class="detailSubContainer">
                        <div>{mailDetail.from}</div>
                        <div>{mailDetail.time}</div>
                        <div>
                            <p>{mailDetail.message}</p>
                        </div>
                    </div>
                    {mailDetail.replies.length > 0 &&
                        mailDetail.replies.map((reply) => (
                            <div class="detailSubContainer">
                                <div>{reply.from}</div>
                                <div>{reply.time}</div>
                                <div>
                                    <p>{reply.message}</p>
                                </div>
                            </div>
                        ))}
                    <textarea
                        id="textarea"
                        value={textValue}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                    <button onClick={handleReply}>Reply</button>
                </div>
            ) : (
                <div>Unable to fetch data</div>
            )}
        </>
    );
};
