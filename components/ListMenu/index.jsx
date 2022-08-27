import { List } from '@chakra-ui/react';
import ItemList from '../ItemList';

function ListMenu(){
    const data = [
        {
            "title": "item1",
            "mdFileContent": "",
            "_createdAt": '2022-08-01',
            "_lastUpdate": '2022-08-26' 
        }, 
        {
            "title": "item2",
            "mdFileContent": "",
            "_createdAt": '2022-08-01',
            "_lastUpdate": '2022-08-26' 
        }, 
        {
            "title": "item3",
            "mdFileContent": "",
            "_createdAt": '2022-08-01',
            "_lastUpdate": '2022-08-26' 
        }
    ]
    
    console.log(data.length)
    
    return (
        <List spacing={3}>
        {data.map((item) => (
            <ItemList name={item.title} key={item.title} />
        ))}
        </List>
    )
}
        
        export default ListMenu;