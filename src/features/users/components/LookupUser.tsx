import React, { useEffect, useMemo, useState, ChangeEvent, KeyboardEvent } from "react";
import { LookupStatus, User } from "../types";
import styles from "./LookupUser.module.css"

type Props = {
    lookupStatus: LookupStatus;
    loadedUsers: User[];
    onLookupUser: (username: string) => void;
}

export function LookupUser({ lookupStatus, loadedUsers, onLookupUser }: Props) {
    const [username, setUsername] = useState("");
    const [isNonExistingUser, setIsNonExistingUser] = useState(false);
    const loadedUsernames = useMemo(
        () => new Set(loadedUsers.map(user => user.username.toLowerCase())),
        [loadedUsers]
    );
    const isLookupDisabled = !username || isNonExistingUser || loadedUsernames.has(username.toLowerCase());
    useEffect(() => {
        if (lookupStatus === "success") {
            setUsername("");
        }
    }, [lookupStatus]);
    useEffect(() => {
        setIsNonExistingUser(lookupStatus === "failure");
    }, [lookupStatus]);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newUsername = event.target.value;
        if (newUsername != username) {
            setUsername(newUsername);
            setIsNonExistingUser(false);
        }
    };
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && !isLookupDisabled) {
            onLookupUser(username);
        }
    };
    const handleButtonClick = () => {
        if (!isLookupDisabled) {
            onLookupUser(username);
        }
    };
    return (
        <div className={`${styles.container} ${(username && isNonExistingUser) ? styles.failure : ""}`}>
            <input
                className={styles.usernameInput}
                value={username}
                placeholder="github username"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button
                className={styles.loadUserButton}
                disabled={isLookupDisabled}
                onClick={handleButtonClick}
            >
                {lookupStatus === "pending"
                    ? <div className="lds-facebook"><div></div><div></div><div></div></div>
                    : <span>Load User</span>
                }
            </button>
        </div>
    );
}
