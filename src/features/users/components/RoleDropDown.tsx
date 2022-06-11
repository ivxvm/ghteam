import React from "react";
import Select from 'react-select';
import styles from "./RoleDropDown.module.css";

const ROLES = [
    "Front-End",
    "Back-End",
    "DevOps",
    "QA",
    "Other"
];

type Props = {
    className?: string;
    value?: string;
    onChange: (role: string) => void;
};

export function RoleDropDown({ className, value, onChange }: Props) {
    const handleChange = (newValue: string) => {
        onChange(newValue);
    };
    return (
        <>
            <Select
                className={`${styles.dropdown} ${className}`}
                value={value as any}
                onChange={handleChange}
                options={ROLES.map(role => ({ value: role, label: role }))}
                menuPlacement="auto"
                styles={{
                    control: (styles) => ({
                        ...styles,
                        minWidth: "200px",
                        textAlign: "right",
                        border: 0,
                        boxShadow: "none",
                        caretColor: "transparent",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                    }),
                    singleValue: (styles) => ({
                        ...styles,
                        fontWeight: "bold",
                        color: "var(--theme-color-fg-1)",
                    }),
                    placeholder: (styles) => ({
                        ...styles,
                        fontWeight: "bold",
                        color: "var(--theme-color-fg-1)",
                    }),
                    dropdownIndicator: (styles) => ({
                        ...styles,
                        color: "var(--theme-color-fg-1)",
                        ":hover": {
                            color: "var(--theme-color-fg-1)",
                        }
                    }),
                    indicatorSeparator: (styles) => ({
                        ...styles,
                        display: "none",
                    }),
                    menuList: (styles) => ({
                        ...styles,
                        padding: 0,
                    }),
                    menu: (styles) => ({
                        ...styles,
                        borderRadius: 0,
                        boxShadow: "none",
                        backgroundColor: "var(--theme-color-bg-3)",
                    }),
                    option: (styles, { isFocused, isSelected }) => ({
                        ...styles,
                        backgroundColor: (isFocused && "var(--theme-color-fg-2)")
                            || (isSelected && "var(--theme-color-bg-1)")
                            || "transparent",
                    })
                }}
            />
        </>
    );
}
