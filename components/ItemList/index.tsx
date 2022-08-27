import { CheckIcon } from "@chakra-ui/icons";
import { ListIcon, ListItem } from "@chakra-ui/react";

function ItemList(props:any){
    return (
        <ListItem>
          <ListIcon as={CheckIcon} color='' />
          {props.name}
        </ListItem>
    );
}

export default ItemList;