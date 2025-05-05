
import PropTypes from "prop-types";
import type { FC, ReactNode } from "react";
import Header from "../components/header/Header";

interface LayoutProps {
    children?: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;

    return <div>
        <Header />
        {children}
    </div>;
};

Layout.propTypes = {
    children: PropTypes.node,
};