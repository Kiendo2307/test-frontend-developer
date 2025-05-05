import Document, { Head, Html, Main, NextScript } from "next/document";
import { AppConfig } from "../untils/AppConfig";
import { Metadata } from "next";


// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <Html lang={AppConfig.locale}>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;