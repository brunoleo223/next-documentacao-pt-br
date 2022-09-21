import { useEffect, useState } from 'react';
import routes from '../../utils/manifest.json';
import Link from 'next/link';
import styles from './styles.module.scss';

export function Menu() {

    const [menu, setMenu] = useState('');
    
    useEffect(() => {
        const r = <div>
        {routes.routes.map((item) => {
            if (item.routes) {
                return (
                <>
                    <details open>
                        <summary key={item.title}>
                            {item.title}
                        </summary>
                        <ul>
                        {item.routes.map((child) => {
                            if (child.routes) {
                            return (
                                <>
                                <details>
                                <summary key={child.title}>
                                    {child.title}
                                </summary>
                                <ul>
                                    {child.routes.map((grandchild) => {
                                    if(grandchild.routes) {
                                        return (
                                            <>
                                            <details>
                                                <summary key={grandchild.title}>
                                                    {grandchild.title}
                                                </summary>
                                                <ul>
                                                {grandchild.routes.map((greatgrandchild) => {
                                                    return (
                                                    <li key={greatgrandchild.title}>
                                                        <Link href={`/docs/${greatgrandchild.path}`}>
                                                            <a>{greatgrandchild.title}</a>
                                                        </Link>
                                                    </li>
                                                    )
                                                })}
                                                </ul>
                                            </details>
                                            </>
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
                                </details>
                                </>
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
                    </details>
                </>
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
        </div>;
        setMenu(r);
    }, [])
    
    return (
        <div className={styles.menu}>
            {menu}
        </div>
    )
}

export default Menu;