import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

const style: React.CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",
    
};

interface Props {
    text: string;
    href: string;
}

export const ActiveLink: React.FC<Props> = ({ text, href }) => {

    const {asPath} = useRouter();

    return (
        <Link href={href}>
            <a style={asPath === href ? style : undefined}>{text ? text : "Custom Active Link"}</a>
        </Link>
    );
};
