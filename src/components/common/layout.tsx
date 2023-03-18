import { ReactElement } from 'react';
import NaveBar from '../user/nav-bar';


interface LayoutProps {
    children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
    return (
        <>
            <NaveBar />
            {children}
        </>
    );
}