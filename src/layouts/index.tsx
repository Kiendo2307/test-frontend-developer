
import PropTypes from "prop-types";
import type { FC, ReactNode } from "react";

interface LayoutProps {
    children?: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
    const { children } = props;

    return <div>
        {children}
    </div>;
};

Layout.propTypes = {
    children: PropTypes.node,
};