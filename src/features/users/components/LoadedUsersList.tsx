import React from "react";
import { User } from "../types";
import styles from "./LoadedUsersList.module.css";

type Props = {
    loadedUsers: User[];
    renderExtras?: (user: User) => JSX.Element;
    onRemoveUser?: (username: string) => void;
}

const displayName = (user: User) =>
    user.fullname
        ? `${user.fullname} (${user.username})`
        : user.username;

export function LoadedUsersList({ loadedUsers, renderExtras, onRemoveUser }: Props) {
    return (
        <div className={styles.container}>
            {loadedUsers.map(user =>
                <div className={styles.row} key={user.username}>
                    <img className={styles.avatar} src={user.avatar} />
                    <span className={styles.name}>{displayName(user)}</span>
                    {renderExtras?.(user)}
                    <div className={styles.removeUserButton} onClick={() => onRemoveUser?.(user.username)}>&#10006;</div>
                </div>
            )}
        </div>
    );
}
