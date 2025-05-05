import { ReactNode } from "react";
import { Layout } from "../layouts";
import Banner from "../components/banner/Banner";

const Index = () => {
    return (
        <div className="flex flex-col items-center">
            <Banner />
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
