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
  'Zieh an, womit du dich wohlfühlst, es darf gerne kinky sein ob es in richtung femboy oder Jogginghose, Netz- und Mesh-Shirts geht ist alles erlaubt.',
  'Puppy-Masken',
  'Fursuit/Murrsuit',
  'Nackte Haut',
  'Petsuit',
];
const dresscodeDont = ['Ölige Latexanzüge zum schutz der Möbel'];
const rules = [
  'Die Party ist ab 18 Jahren.',
  'Respektiere die Individualität aller Teilnehmenden.',
  'Kein Konsum von Alkohol oder Drogen.',
  'Achte allgemein auf eine gute Körperhygiene.',
  'Nein heißt nein. Frag immer, bevor du jemanden berührst.',
  'Ein Ja kann jederzeit zurückgenommen werden.',
  'Consent ist wichtig! Auf der Party nutzen wir das Ampelsystem. Wer eigene Codewörter möchte, spricht das mit dem Spielpartner ab.',
  'Sprich vorher offen über Grenzen, Vorlieben und deinen STI-Status.',
  'Safer Sex ist wichtig! Kondome stehen für alle zur Verfügung.',
  'Kein Body Shaming, kein Rassismus, keine Queer- oder Transfeindlichkeit.',
  'Furry, Pup oder nicht: Niemand muss sich für sein Outfit rechtfertigen.',
  'Keine Fotos oder Videos auf der Party.',
  'Was auf der Party passiert, bleibt auf der Party.',
  'Wir sind keine reine BDSM-Party. Bitte keine extremen Spiele mit Peitschen, Paddles oder anderen lauten Toys, damit wir die Nachbarschaft nicht stören.',
  'Dildos, Vibrator und Strap-ons sind erlaubt, ein paar stehen auch zur Verfügung.',
  'Bitte bleibt allgemein leise, zum Schutz der Nachbarn.',
];
const wristbands = [
  {
    color: 'Lila',
    quote: 'Free use, I actively wanna be used.',
    meaning:
      'Benutze mich, ohne zu fragen. Ein Nein bleibt trotzdem ein Nein, respektiere die Grenzen. Nur für erfahrene Spieler empfohlen, nicht für Anfänger.',
  },
  {
    color: 'Grün',
    quote: 'I’m actively looking for play.',
    meaning: 'Offen zum Kuscheln, Anfassen und GV.',
  },
  {
    color: 'Gelb',
    quote: 'I’m not actively looking for play.',
    meaning: 'Auf Anfrage, erotischer Kontakt ohne GV steht im Vordergrund.',
  },
  { color: 'Rot', quote: 'I’m not looking for play.', meaning: 'Ich schaue nur zu oder Ich frage aktiv wenn mir danach ist. Ich nehme mir eine Pause.' },
];
const wristbandTips = [
  'Frag niemanden mit rotem Bändchen nach einem Spiel.',
  'Egal welches Bändchen: Frag nur einmal, außer die Person sagt ausdrücklich, dass du später nochmal fragen darfst. Drängeln macht niemandem Spaß.',
  'Egal welches Bändchen: Bohre nicht nach, wenn jemand Nein sagt oder ausweichend antwortet („weiß nicht“, „ich überleg’s mir“). Wenn die Person es anders gemeint hat oder es sich später anders überlegt, kann sie dich selbst fragen. Warte immer auf ein klares Ja.',
  'Dein Bändchen ist nicht in Stein gemeißelt. Wenn sich deine Stimmung im Laufe des Abends ändert, tausch es einfach.',
];
const wristbandFaq = [
  {
    q: 'Welche Farbe soll ich nehmen?',
    a: 'Die, die am besten zu dir passt. Im Zweifel nimm Gelb. Wenn es deine erste Party ist, empfehlen wir Rot oder Gelb.',
  },
  {
    q: 'Darf ich jemanden mit gelbem Bändchen fragen?',
    a: 'Vielleicht, entscheide mit Gefühl. Wenn du sicher bist, dass die Person wirklich Lust hat, kannst du fragen. Mit grünem Bändchen ist es aber nie falsch, abzuwarten und die andere Person fragen zu lassen. Umgekehrt gilt: Wenn du Gelb oder Rot trägst und mit jemandem spielen willst, solltest du selbst fragen.',
  },
  {
    q: 'Ich habe jemanden mit rotem Bändchen spielen sehen. Ist das gegen die Regeln?',
    a: 'Nein. Rot heißt nicht „ich spiele nicht“, sondern „frag mich nicht“, vor allem nicht als fremde Person. Die Person kann trotzdem spielen, zum Beispiel wenn es vorher abgesprochen war, mit dem eigenen Partner oder wenn sie selbst gefragt hat.',
  },
  {
    q: 'Muss ich ein Bändchen tragen?',
    a: 'Nicht unbedingt, niemand wird deswegen rausgeworfen. Wir empfehlen es aber sehr, für dich und für alle anderen.',
  },
  {
    q: 'Was ist, wenn jemand kein Bändchen trägt?',
    a: 'Dann behandle die Person wie Gelb.',
  },
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
          Nächste Party: 26.12.2026, 13 bis 23 Uhr
        </Text>
        <Text ta="center" mt="xs">
          Bitte seid pünktlich zum Start vor Ort, damit ihr die Einleitung nicht verpasst.
        </Text>

        <SimpleGrid id="infos" cols={{ base: 1, sm: 2 }} verticalSpacing="xl" mt={80}>
          <Paper className={classes.card} p="lg" radius="lg">
            <Title order={2} size="h3">
              Dresscode
              <Text mt="md"> Wir wollen allgemein einen lockeren Dresscode erzielen.</Text>
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
              Was dich erwartet
            </Title>
            <Text mt="xs">
              Eine ruhige, kuschelige, aber auch kinky Atmosphäre. Die Party ist dazu da, Anfänger
              und Neulinge zusammenzubringen, damit alle die Möglichkeit haben, sich kennenzulernen
              und neue Spielpartner zu finden. Neben dem Kuscheln gibt es auch Spiele sowie eine
              Kennenlernrunde am Anfang.
            </Text>
          </Paper>
        </SimpleGrid>

        <Paper id="regeln" className={classes.card} p="xl" radius="lg" mt={60}>
          <Title order={2}>Regeln</Title>
          <List mt="md" spacing="xs">
            {rules.map((rule) => (
              <List.Item key={rule}>{rule}</List.Item>
            ))}
          </List>
          <Title order={3} mt="xl">
            Bändchen-System
          </Title>
          <List mt="xs" spacing="xs">
            {wristbands.map((band) => (
              <List.Item key={band.color}>
                <b>{band.color}:</b> <i>„{band.quote}“</i> {band.meaning}
              </List.Item>
            ))}
          </List>
          <List mt="md" spacing="xs">
            {wristbandTips.map((tip) => (
              <List.Item key={tip}>{tip}</List.Item>
            ))}
          </List>
          <Title order={4} mt="lg">
            Häufige Fragen
          </Title>
          {wristbandFaq.map((item) => (
            <Box key={item.q} mt="sm">
              <Text fw={700}>{item.q}</Text>
              <Text>{item.a}</Text>
            </Box>
          ))}
          <Title order={3} mt="xl">
            Awareness-Team
          </Title>
          <Text mt="xs">
            Am Partytag gibt es ein Awareness-Team aus 1 bis 2 Personen, die sich je nach Uhrzeit
            abwechseln. Die Person im Dienst entscheidet in jeder Situation und darf alle, die sich
            nicht an die Regeln halten, der Party verweisen.
          </Text>
          <Text mt="xs">
            Sie ist euer Anker und Ansprechpartner, wenn ihr euch unwohl fühlt, auch bei
            medizinischen Notfällen. Wenn ihr Bedenken habt, informiert das Awareness-Team bitte
            schon vorher über eine mögliche Notlage, zum Beispiel Diabetes, Kreislaufprobleme oder
            Panikattacken.
          </Text>
        </Paper>

        <SimpleGrid cols={{ base: 1, sm: 2 }} verticalSpacing="xl" mt={60}>
          <Paper className={classes.card} p="xl" radius="lg">
            <Title order={2}>Anreise</Title>
            <Text mt="md">Treffen am 26.12.2026: Karlsruhe, Weststadt, Yorckstraße.</Text>
            <Text mt="md">Die genaue Adresse wird kurz vorher bekannt gegeben.</Text>
            <Text mt="md">
              Die Location kann sich je nach Termin ändern. Wer Platz und Lust hat, darf gerne einen
              Ort vorschlagen und zur verfügung stellen.
            </Text>
          </Paper>
          <Paper id="gruppenchat" className={classes.card} p="xl" radius="lg">
            <Title order={2}>Telegram-Gruppenchat</Title>
            <Text mt="md">
              Ihr werdet zuerst in die Wartezimmer-Gruppe weitergeleitet. Dort bestätigt euch ein
              Admin für die Hauptgruppe.{' '}
            </Text>
            <Text mt="md">
              In der Hauptgruppe könnt ihr euch schon mal mit einem Steckbrief vorstellen und euch
              mit anderen Teilnehmenden austauschen.
            </Text>
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
          </Paper>
        </SimpleGrid>

        <Paper id="location" className={classes.card} p="xl" radius="lg" mt={60} mb={100}>
          <Title order={2}>Location</Title>
          <Text mt="md">Bilder folgen.</Text>
        </Paper>
      </Container>

      <Box component="footer" className={classes.footer} py="xl">
        <Group justify="center" gap="xl">
          <Anchor href="mailto:cuddlpile@pm.me" c="white">
            Email: cuddlpile@pm.me
          </Anchor>
        </Group>
      </Box>
    </>
  );
}
