import { ReactNode } from "react";
import { Layout } from "../layouts";
import Banner from "../components/banner/Banner";
import Voucher from "../components/voucher/Voucher";
import DirectTopUp from "../components/direct/DirectTopUp";
import QnA from "../components/qna/QnA";
import PromoCode from "../components/promo-code/PromoCode";

const Index = () => {
    return (
        <div className="flex flex-col items-center">
            <Banner />
            <Voucher/>
            <DirectTopUp/>
            <QnA/>
            <PromoCode/>
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
