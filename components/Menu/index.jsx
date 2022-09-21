import { useEffect, useState } from 'react';
import routes from '../../utils/manifest.json';
import Link from 'next/link';

export function Menu() {

    const [menu, setMenu] = useState('');
    
    useEffect(() => {
        const r = <ul>
        {routes.routes.map((item) => {
            if (item.routes) {
                return (
                <li key={item.title}>
                    {item.title}
                    <ul>
                    {item.routes.map((child) => {
                        if (child.routes) {
                        return (
                            <li key={child.title}>
                            {child.title}
                            <ul>
                                {child.routes.map((grandchild) => {
                                if(grandchild.routes) {
                                    return (
                                    <li key={grandchild.title}>
                                        {grandchild.title}
                                        <ul>
                                        {grandchild.routes.map((greatgrandchild) => {
                                            if(greatgrandchild.routes) {
                                                return (
                                                <li key={greatgrandchild.title}>
                                                    {greatgrandchild.title}
                                                    <ul>
                                                    {greatgrandchild.routes.map((greatgreatgrandchild) => {
                                                        return (
                                                        <li key={greatgreatgrandchild.title}>
                                                            <Link href={`/docs/${greatgreatgrandchild.path}`}>
                                                                <a>{greatgreatgrandchild.title}</a>
                                                            </Link>
                                                        </li>
                                                        )
                                                    })}
                                                    </ul>
                                                </li>
                                                )
                                            }
                                            return (
                                            <li key={greatgrandchild.title}>
                                                <Link href={`/docs/${greatgrandchild.path}`}>
                                                    <a>{greatgrandchild.title}</a>
                                                </Link>
                                            </li>
                                            )
                                        })}
                                        </ul>
                                    </li>
                                    )
                                }
                                return (
                                    <li key={grandchild.title}>
                                        <Link href={`/docs/${grandchild.path}`}>
                                            <a>{grandchild.title}</a>
                                        </Link>
                                    </li>
                                );
                                })}
                            </ul>
                            </li>
                        );
                        }
                        return (
                        <li key={child.title}>
                            <Link href={`/docs/${child.path}`}>
                                <a>{child.title}</a>
                            </Link>
                        </li>
                        );
                    })}
                    </ul>
                </li>
                );
            }
            return (
                <li key={item.title}>
                    <Link href={`/docs/${item.path}`}>
                        <a>{item.title}</a>
                    </Link>
                </li>
            );
            }
            )}
        </ul>;
        setMenu(r);
    }, [])
    
    return (
        <div>
            {menu}
        </div>
    )
}

export default Menu;