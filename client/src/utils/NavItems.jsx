// Helper funcition to render nested nav list
import { menu } from "./navlinks.js";
import {
    Anchor,
    HoverCard,
    SimpleGrid,
    Stack,
    UnstyledButton,
    Text,
} from "@mantine/core";

export function NavItems() {
    return menu.map((item) => (
	<HoverCard key={item.label}>
	    <HoverCard.Target>
		<UnstyledButton>{item.label}</UnstyledButton>
	    </HoverCard.Target>
	    <HoverCard.Dropdown>
		<SimpleGrid cols={3} spacing="xs" verticalSpacing="xs">
		    {item.groups.map((section) => (
			<Stack key={section.title} spacing="xs">
			    <Text size="sm" fw={500}>
				{section.title}
			    </Text>
			    {section.links.map((link) => (
				<Anchor key={link.label} href={link.link}>
				    {link.label}
				</Anchor>
			    ))}
			</Stack>
		    ))}
		</SimpleGrid>
	    </HoverCard.Dropdown>
	</HoverCard>
    ));
}
