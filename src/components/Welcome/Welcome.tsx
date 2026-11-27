import {
  Anchor,
  Box,
  Container,
  Group,
  Image,
  List,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import character from '../../character.png';
import classes from './Welcome.module.css';

const dresscodeDo = [
  'Zieh an, womit du dich wohlfühlst',
  'Puppy-Masken',
  'Fursuit/Murrsuit',
  'Nackte Haut ist erlaubt',
  'Petsuit',
];
const dresscodeDont = ['Ölige Latexanzüge'];
const rules = [
  'Die Party ist ab 18 Jahren.',
  'Kein Konsum von Alkohol oder Drogen.',
  'Achte allgemein auf eine gute Körperhygiene.',
];
const chatLink = 'https://t.me/+Lhbgb-9KFNdjZGE6';

export function Welcome() {
  return (
    <>
      <Container component="main">
        <Title className={classes.title} ta="center" pt={80}>
          Willkommen zur CuddlPile Party
        </Title>
        <Text ta="center" size="xl" maw={580} mx="auto" mt="xl">
          Wir sind eine queere und furry freundliche play Party.
        </Text>
        <Image
          src={character}
          alt="Furry Figur liegt entspannt auf Kissen"
          maw={480}
          mx="auto"
          mt="xl"
        />
        <Text ta="center" fw={700} mt="md">
          Nächste Party: 26.12.2026
        </Text>

        <SimpleGrid id="infos" cols={{ base: 1, sm: 3 }} verticalSpacing="xl" mt={80}>
          <Paper className={classes.card} p="lg" radius="lg">
            <Title order={2} size="h3">
              Dresscode
            </Title>
            <Text fw={700} mt="xs">
              Do:
            </Text>
            <List spacing="xs">
              {dresscodeDo.map((item) => (
                <List.Item key={item}>{item}</List.Item>
              ))}
            </List>
            <Text fw={700} mt="sm">
              Don't:
            </Text>
            <List spacing="xs">
              {dresscodeDont.map((item) => (
                <List.Item key={item}>{item}</List.Item>
              ))}
            </List>
          </Paper>
          <Paper className={classes.card} p="lg" radius="lg">
            <Title order={2} size="h3">
              Anreise
            </Title>
            <Text mt="xs">Karlsruhe, Weststadt in der Yorckstraße</Text>
          </Paper>
          <Paper id="regeln" className={classes.card} p="lg" radius="lg">
            <Title order={2} size="h3">
              Regeln
            </Title>
            <List mt="xs" spacing="xs">
              {rules.map((rule) => (
                <List.Item key={rule}>{rule}</List.Item>
              ))}
            </List>
          </Paper>
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, sm: 2 }} verticalSpacing="xl" mt={60}>
          <Paper className={classes.card} p="xl" radius="lg">
            <Title order={2}>Was dich erwartet</Title>
            <Text mt="md">Eine ruhige, kuschelige, aber auch kinky Atmosphäre. Die party ist nicht dazu da damit man immer mit denselben Vögelt, sondern man offen genug sein sollte sich an neue spielpartner heran zu tasten.</Text>
          </Paper>
          <Paper id="gruppenchat" className={classes.card} p="xl" radius="lg">
            <Title order={2}>Gruppenchat</Title>
            <Text mt="md">Unten ist der Link zum Telegram-Gruppenchat:</Text>
            <Anchor
              href={chatLink}
              c="inherit"
              fw={700}
              underline="always"
              mt="md"
              display="inline-block"
            >
              Zum Gruppenchat
            </Anchor>
            <Text mt="md">
              Dort könnt ihr euch schon mal mit einem Steckbrief vorstellen und euch mit anderen
              Teilnehmern austauschen.
            </Text>
          </Paper>
        </SimpleGrid>

        <Paper id="location" className={classes.card} p="xl" radius="lg" mt={60} mb={100}>
          <Title order={2}>Location</Title>
          <Text mt="md">Bilder folgen.</Text>
        </Paper>
      </Container>

      <Box component="footer" className={classes.footer} py="xl">
        <Group justify="center" gap="xl"></Group>
      </Box>
    </>
  );
}
