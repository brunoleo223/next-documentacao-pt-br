import { useEffect, useState } from 'react';
import routes from '../../docs/manifest.json'

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
                                            return (
                                            <li key={greatgrandchild.title}>
                                                <a href={greatgrandchild.path}>
                                                <a>{greatgrandchild.title}</a>
                                                </a>
                                            </li>
                                            )
                                        })}
                                        </ul>
                                    </li>
                                    )
                                }
                                return (
                                    <li key={grandchild.title}>
                                    <a href={grandchild.path}>
                                        <a>{grandchild.title}</a>
                                    </a>
                                    </li>
                                );
                                })}
                            </ul>
                            </li>
                        );
                        }
                        return (
                        <li key={child.title}>
                            <a href={child.path}>
                            <a>{child.title}</a>
                            </a>
                        </li>
                        );
                    })}
                    </ul>
                </li>
                );
            }
            return (
                <li key={item.title}>
                <a href={item.path}>
                    <a>{item.title}</a>
                </a>
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