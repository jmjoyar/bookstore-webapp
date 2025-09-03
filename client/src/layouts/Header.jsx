import {
    Anchor,
    Autocomplete,
    Avatar,
    Container,
    Flex,
    Group,
    HoverCard,
    Image,
    SimpleGrid,
    Stack,
    UnstyledButton,
    Text,
} from "@mantine/core";

import { IconSearch, IconShoppingCart } from "@tabler/icons-react";
import { Link } from "react-router";
import classes from "./Header.module.css";
import { NavItems } from "../utils/NavItems.jsx";
import logo from "../assets/images/logo/logo.svg";
import brand from "../assets/images/logo/sc-logo.png";

export default function Header() {
    const iconSearch = <IconSearch size={16} />;
    const iconShoppingCart = <IconShoppingCart size={16} />;
    let isLoggedIn = false;

    return (
	<header className={classes.header}>
	    <Container>
		<Flex
		    className={classes.navTop}
		    justify="space-between"
		    align="center"
		    gap="lg"
		>
		    <Image src={logo} h={40} w="auto" fit="contain" />
		    <Image src={brand} h={40} w="auto" fit="contain" />
		    <Autocomplete
			rightSection={iconSearch}
			rightSectionPointerEvents="auto"
			placeholder="Buscar por autor, título o ISBN"
			inputSize="30"
		    />
		    <div>
			<a href="#">{iconShoppingCart}</a>
		    </div>
		    <div>
			{isLoggedIn ? (
			    <Avatar component="button" />
			) : (
			    <Link to={"/login"}>
				<Avatar />
			    </Link>
			)}
		    </div>
		</Flex>
		<Flex
		    className={classes.navBottom}
		    justify="space-between"
		    align="center"
		    gap="lg"
		>
		    <NavItems />
		</Flex>
	    </Container>
	</header>
    );
}
