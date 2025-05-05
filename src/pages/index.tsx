import { ReactNode } from "react";
import { Layout } from "../layouts";

const Index = () => {
    return (
        <div className="container">
            xin chao
        </div>
    );
};

Index.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export async function getStaticProps() {
    return {
        props: {},
        revalidate: 60 * 60 * 24, // In days
    };
}

export default Index;
