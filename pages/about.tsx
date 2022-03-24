import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

const AboutPage = () => {
    return (
        <>
            <h1>About Page</h1>
            <h1 className="title">
                {/* Ir a <a href="/">Home</a> */}Ir a{" "}
                <Link href={"/"}>Home</Link>
            </h1>

            <p className="description">
                Get started by editing{" "}
                <code className="code">pages/about.jsx</code>
            </p>
        </>
    );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <MainLayout>
            <DarkLayout>{page}</DarkLayout>
        </MainLayout>
    );
};
