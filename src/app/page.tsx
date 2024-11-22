"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, InlineCode, Logo, LetterFx, Arrow } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "https://github.com/hsriesd",
			title: "Github",
			description: "This is my github",
		},
		{
			href: "https://youtube.com/playlist?list=PL8XKmp_L-8UYKVGIBN7MxqPAK_u9TkOv7&si=Hhsb8qt77eqn67DF",
			title: "Playlist",
			description: "My love songs list",
		},
		{
			href: "https://instagram.com/hsries_",
			title: "Instagram",
			description: "My instagram",
		}
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="56" paddingX="xl">
							<Logo size="xl" icon={false} style={{zIndex: '1'}} href="https://once-ui.com"/>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<InlineCode
								className="shadow-m"
								style={{
									width: 'fit-content',
									padding: 'var(--static-space-8) var(--static-space-16)',
									backdropFilter: 'blur(var(--static-space-1))'}}>
								Language <span className="brand-on-background-medium">.py .java .cs .html .css .js .php .ts and more..</span>
							</InlineCode>
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										I will go to KAIST OR SEOUL UNIVERSITY
										Coding is so excting..!
									</LetterFx>
								</span>
							</Heading>
							//<Button
							//	id="readDocs"
							//	href="https://once-ui.com/docs"
							//	variant="secondary">
							//	<Flex alignItems="center">
							//		Read docs
							//		<Arrow trigger="#readDocs"/>
							//	</Flex>
							//</Button>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Hsries, <Link href="https://github.com/hsriesd/hsriesd.xyz/blob/main/LICENSE">MIT License</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/hsriesd/hsriesd.xyz/"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="#hsries_"
						prefixIcon="discord" size="s" variant="tertiary">
						Discord | ID : hsries_
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
