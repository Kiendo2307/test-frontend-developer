import Head from "next/head";

type IMetaProps = {
    title: string;
    description: string;
    canonical?: string;
    imageUrl?: string;
};

const Meta = ({ title, description, canonical, imageUrl }: IMetaProps) => {
    const fullUrl = canonical || (typeof window !== "undefined" ? window.location.href : '');

    const defaultImage = imageUrl || "";

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={fullUrl} />
                <meta property="og:image" content={defaultImage} />
            </Head>
        </>
    );
};

export { Meta };
