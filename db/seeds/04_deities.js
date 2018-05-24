exports.seed = function(knex, Promise) {
  return knex('deities').del()
    .then(function () {
      return knex('deities').insert([
{id: 1, name: 'Auril', of: 'goddess of winter',	alignment: 8, level: '', active: true, url: '', symbol: 'Six-pointed snowflake', pantheon: 1, gender: 'female'},
{id: 2, name: 'Azuth', of: 'god of wizards',	alignment: 4, level: '', active: true, url: '', symbol: 'Left hand pointing upward, outlined in fire', pantheon: 1, gender: 'male'},
{id: 3, name: 'Bane', of: 'god of tyranny',	alignment: 7, level: '', active: true, url: '', symbol: 'Upright black right hand, thumb and fingers together', pantheon: 1, gender: 'male'},
{id: 4, name: 'Beshaba', of: 'goddess of misfortune',	alignment: 9, level: '', active: true, url: '', symbol: 'Black antlers', pantheon: 1, gender: 'female'},
{id: 5, name: 'Bhaal', of: 'god of murder',	alignment: 8, level: '', active: true, url: '', symbol: 'Skull surrounded by a ring of blood droplets', pantheon: 1, gender: 'male'},
{id: 6, name: 'Chauntea', of: 'goddess of agriculture',	alignment: 2, level: '', active: true, url: '', symbol: 'Sheaf of grain or a blooming rose over grain', pantheon: 1, gender: 'female'},
{id: 7, name: 'Cyric', of: 'god of lies',	alignment: 9, level: '', active: true, url: '', symbol: 'White jawless skull on black or purple sunburst', pantheon: 1, gender: 'male'},
{id: 8, name: 'Deneir', of: 'god of writing',	alignment: 2, level: '', active: true, url: '', symbol: 'Lit candle above an open eye', pantheon: 1, gender: 'male'},
{id: 9, name: 'Eldath', of: 'goddess of peace',	alignment: 2, level: '', active: true, url: '', symbol: 'Nature	Waterfall plunging into still pool', pantheon: 1, gender: 'female'},
{id: 10, name: 'Gond', of: 'god of craft',	alignment: 5, level: '', active: true, url: '', symbol:	'Toothed cog with four spokes', pantheon: 1, gender: 'male'},
{id: 11, name: 'Helm', of: 'god of protection',	alignment: 4, level: '', active: true, url: '', symbol: 'Staring eye on upright left gauntlet', pantheon: 1, gender: 'male'},
{id: 12, name: 'Ilmater', of: 'god of endurance',	alignment: 1, level: '', active: true, url: '', symbol: 'Hands bound at the wrist with red cord', pantheon: 1, gender: 'male'},
{id: 13, name: 'Kelemvor', of: 'god of the dead',	alignment: 4, level: '', active: true, url: '', symbol:	'Upright skeletal arm holding balanced scales', pantheon: 1, gender: 'male'},
{id: 14, name: 'Lathander', of: 'god of birth and renewal',	alignment: 2, level: '', active: true, url: '', symbol: 'Road traveling into a sunrise', pantheon: 1, gender: 'male'},
{id: 15, name: 'Leira', of: 'goddess of illusion',	alignment: 6, level: '', active: true, url: '', symbol: 'Point-down triangle containing a swirl of mist', pantheon: 1, gender: 'female'},
{id: 16, name: 'Lliira', of: 'goddess of joy',	alignment: 3, level: '', active: true, url: '', symbol: 'Triangle of three six-pointed stars',	pantheon: 1, gender: 'female'},
{id: 17, name: 'Loviatar', of: 'goddess of pain',	alignment: 7, level: '', active: true, url: '', symbol:	'Nine-tailed barbed scourge', pantheon: 1, gender: 'female'},
{id: 18, name: 'Malar', of: 'god of the hunt',	alignment: 9, level: '', active: true, url: '', symbol: 'Clawed paw', pantheon: 1, gender: 'male'},
{id: 19, name: 'Mask', of: 'god of thieves',	alignment: 6, level: '', active: true, url: '', symbol: 'Black mask', pantheon: 1, gender: 'male'},
{id: 20, name: 'Mielikki', of: 'goddess of forests',	alignment: 2, level: '', active: true, url: '', symbol: 'Unicorn’s head', pantheon: 1, gender: 'female'},
{id: 21, name: 'Milil', of: 'god of poetry and song',	alignment: 2, level: '', active: true, url: '', symbol: 'Five-stringed harp made of leaves', pantheon: 1, gender: 'male'},
{id: 22, name: 'Myrkul', of: 'god of death',	alignment: 8, level: '', active: true, url: '', symbol: 'White human skull', pantheon: 1, gender: 'male'},
{id: 23, name: 'Mystra', of: 'goddess of magic',	alignment: 2, level: '', active: true, url: '', symbol: 'Circle of seven stars, or nine stars encircling a flowing red mist, or a single star', pantheon: 1, gender: 'female'},
{id: 24, name: 'Oghma', of: 'god of knowledge',	alignment: 5, level: '', active: true, url: '', symbol: 'Blank scroll', pantheon: 1, gender: 'male'},
{id: 25, name: 'Savras', of: 'god of divination and fate',	alignment: 4, level: '', active: true, url: '', symbol: 'Crystal ball containing many kinds of eyes', pantheon: 1, gender: 'male'},
{id: 26, name: 'Selûne', of: 'goddess of the moon',	alignment: 3, level: '', active: true, url: '', symbol: 'Pair of eyes surrounded by seven stars', pantheon: 1, gender: 'female'},
{id: 27, name: 'Shar', of: 'goddess of darkness and loss',	alignment: 8, level: '', active: true, url: '', symbol: 'Black disk encircled with a border', pantheon: 1, gender: 'female'},
{id: 28, name: 'Silvanus', of: 'god of wild nature',	alignment: 5, level: '', active: true, url: '', symbol: 'Oak leaf', pantheon: 1, gender: 'male'},
{id: 29, name: 'Sune', of: 'goddess of love and beauty',	alignment: 3, level: '', active: true, url: '', symbol: 'Face of a beautiful red-haired woman', pantheon: 1, gender: 'female'},
{id: 30, name: 'Talona', of: 'goddess of disease and poison',	alignment: 9, level: '', active: true, url: '', symbol: 'Three teardrops on a triangle', pantheon: 1, gender: 'female'},
{id: 31, name: 'Talos', of: 'god of storms',	alignment: 9, level: '', active: true, url: '', symbol:	'Three lightning bolts radiating from a central point', pantheon: 1, gender: 'male'},
{id: 32, name: 'Tempus', of: 'god of war',	alignment: 5, level: '', active: true, url: '', symbol: 'Upright flaming sword',	pantheon: 1, gender: 'male'},
{id: 33, name: 'Torm', of: 'god of courage and self-sacrifice',	alignment: 1, level: '', active: true, url: '', symbol: 'White right gauntlet', pantheon: 1, gender: 'male'},
{id: 34, name: 'Tymora', of: 'goddess of good fortune',	alignment: 3, level: '', active: true, url: '', symbol: 'Face-up coin', pantheon: 1, gender: 'female'},
{id: 35, name: 'Tyr', of: 'god of justice',	alignment: 1, level: '', active: true, url: '', symbol: 'Balanced scales resting on a warhammer', pantheon: 1, gender: 'male'},
{id: 36, name: 'Umberlee', of: 'goddess of the sea',	alignment: 9, level: '', active: true, url: '', symbol:	'Wave curling left and right',  pantheon: 1, gender: 'female'},
{id: 37, name: 'Waukeen', of: 'goddess of trade',	alignment: 5, level: '', active: true, url: '', symbol: 'Upright coin with Waukeen’s profile facing left',	pantheon: 1, gender: 'female'},
{id: 38, name: 'The Daghdha', of: 'god of weather and crops', alignment: 3, level: '', active: true, url: '', symbol: 'Bubbling cauldron or shield', pantheon: 2, gender: 'male'},
{id: 39, name: 'Arawn', of: 'god of life and death', alignment: 8, level: '', active: true, url: '', symbol: 'Black star on gray background', pantheon: 2, gender: 'male'},
{id: 40, name: 'Belenus', of: 'god of sun, light, and warmth', alignment: 2, level: '', active: true, url: '', symbol: 'Solar disk and standing stones', pantheon: 2, gender: 'male'},
{id: 41, name: 'Brigantia', of: 'goddess of rivers and livestock', alignment: 2, level: '', active: true, url: '', symbol: 'Footbridge', pantheon: 2, gender: 'female'},
{id: 42, name: 'Diancecht', of: 'god of medicine and healing', alignment: 1, level: '', active: true, url: '', symbol: 'Crossed oak and mistletoe branches', pantheon: 2, gender: 'male'},
{id: 43, name: 'Dunatis', of: 'god of mountains and peaks', alignment: 5, level: '', active: true, url: '', symbol: 'Red sun-capped mountain peak', pantheon: 2, gender: 'male'},
{id: 44, name: 'Goibhniu', of: 'god of smiths and healing', alignment: 2, level: '', active: true, url: '', symbol: 'Giant mallet over sword', pantheon: 2, gender: 'male'},
{id: 45, name: 'Lugh', of: 'god of arts, travel, and commerce', alignment: 6, level: '', active: true, url: '', symbol: 'Pair of long hands', pantheon: 2, gender: 'male'},
{id: 46, name: 'Manannan mac Lir', of: 'god of oceans and sea creatures', alignment: 4, level: '', active: true, url: '', symbol: 'Wave of white water on green', pantheon: 2, gender: 'male'},
{id: 47, name: 'Math Mathonwy', of: 'god of magic', alignment: 8, level: '', active: true, url: '', symbol: 'Staff', pantheon: 2, gender: 'male'},
{id: 48, name: 'Morrigan', of: 'goddess of battle', alignment: 9, level: '', active: true, url: '', symbol: 'Two crossed spears', pantheon: 2, gender: 'female'},
{id: 49, name: 'Nuada', of: 'god of war and warriors', alignment: 5, level: '', active: true, url: '', symbol: 'Silver hand on black background', pantheon: 2, gender: 'male'},
{id: 50, name: 'Oghma', of: 'god of speech and writing', alignment: 2, level: '', active: true, url: '', symbol: 'Unfurled scroll', pantheon: 2, gender: 'male'},
{id: 51, name: 'Silvanus', of: 'god of nature and forests', alignment: 5, level: '', active: true, url: '', symbol: 'Summer oak tree', pantheon: 2, gender: 'male'},
{id: 52, name: 'Zeus', of: 'god of the sky, ruler of the gods', alignment: 5, level: '', active: true, url: '', symbol: 'Fist full of lightning bolts', pantheon: 3, gender: 'male'},
{id: 53, name: 'Aphrodite', of: 'goddess of love and beauty', alignment: 3, level: '', active: true, url: '', symbol: 'Sea shell', pantheon: 3, gender: 'female'},
{id: 54, name: 'Apollo', of: 'god of light, music, and healing', alignment: 3, level: '', active: true, url: '', symbol: 'Lyre', pantheon: 3, gender: 'male'},
{id: 55, name: 'Ares', of: 'god of war and strife', alignment: 9, level: '', active: true, url: '', symbol: 'Spear', pantheon: 3, gender: 'male'},
{id: 56, name: 'Artemis', of: 'goddess of hunting and childbirth', alignment: 2, level: '', active: true, url: '', symbol: 'Bow and arrow on lunar disk', pantheon: 3, gender: 'female'},
{id: 57, name: 'Athena', of: 'goddess of wisdom and civilization', alignment: 1, level: '', active: true, url: '', symbol: 'Owl', pantheon: 3, gender: 'female'},
{id: 58, name: 'Demeter', of: 'goddess of agriculture', alignment: 2, level: '', active: true, url: '', symbol: 'Head of a Mare', pantheon: 3, gender: 'female'},
{id: 59, name: 'Dionysus', of: 'god of mirth and wine', alignment: 6, level: '', active: true, url: '', symbol: 'Thyrsus (staff tipped with pine cone)', pantheon: 3, gender: 'male'},
{id: 60, name: 'Hades', of: 'god of the underworld', alignment: 7, level: '', active: true, url: '', symbol: 'Black ram', pantheon: 3, gender: 'male'},
{id: 61, name: 'Hecate', of: 'goddess of magic and the moon', alignment: 9, level: '', active: true, url: '', symbol: 'Setting moon', pantheon: 3, gender: 'female'},
{id: 62, name: 'Hephaestus', of: 'god of smithing and craft', alignment: 2, level: '', active: true, url: '', symbol: 'Hammer and anvil', pantheon: 3, gender: 'male'},
{id: 63, name: 'Hera', of: 'goddess of marriage and intrigue', alignment: 6, level: '', active: true, url: '', symbol: 'Fan of peacock feathers', pantheon: 3, gender: 'female'},
{id: 64, name: 'Hercules', of: 'god of strength and adventure', alignment: 3, level: '', active: true, url: '', symbol: 'Head of a Lion', pantheon: 3, gender: 'male'},
{id: 65, name: 'Hermes', of: 'god of travel and commerce', alignment: 3, level: '', active: true, url: '', symbol: 'Caduceus (winged staff and serpents)', pantheon: 3, gender: 'male'},
{id: 66, name: 'Hestia', of: 'goddess of home and family', alignment: 2, level: '', active: true, url: '', symbol: 'Hearth', pantheon: 3, gender: 'female'},
{id: 67, name: 'Nike', of: 'goddess of victory', alignment: 4, level: '', active: true, url: '', symbol: 'Winged woman', pantheon: 3, gender: 'female'},
{id: 68, name: 'Pan', of: 'god of nature', alignment: 6, level: '', active: true, url: '', symbol: 'Syrinx (pan pipes)', pantheon: 3, gender: 'female'},
{id: 69, name: 'Poseidon', of: 'god of the sea and earthquakes', alignment: 6, level: '', active: true, url: '', symbol: 'Trident', pantheon: 3, gender: 'male'},
{id: 70, name: 'Tyche', of: 'goddess of good fortune', alignment: 5, level: '', active: true, url: '', symbol: 'Red pentagram', pantheon: 3, gender: 'female'},
{id: 71, name: 'Re-Horakhty', of: 'god of the sun, ruler of the gods', alignment: 1, level: '', active: true, url: '', symbol: 'Solar disk encircled by serpent', pantheon: 4, gender: 'male'},
{id: 72, name: 'Anubis', of: 'god of judgment and death', alignment: 4, level: '', active: true, url: '', symbol: 'Black jackal', pantheon: 4, gender: 'male'},
{id: 73, name: 'Apep', of: 'god of evil, fire, and serpents', alignment: 8, level: '', active: true, url: '', symbol: 'Flaming snake', pantheon: 4, gender: 'male'},
{id: 74, name: 'Bast', of: 'goddess of cats and vengeance', alignment: 3, level: '', active: true, url: '', symbol: 'Cat', pantheon: 4, gender: 'female'},
{id: 75, name: 'Bes', of: 'god of luck and music', alignment: 6, level: '', active: true, url: '', symbol: 'Image of the misshapen deity', pantheon: 4, gender: 'male'},
{id: 76, name: 'Hathor', of: 'goddess of love, music, and motherhood', alignment: 2, level: '', active: true, url: '', symbol: 'Horned cow’s head with lunar disk', pantheon: 4, gender: 'female'},
{id: 77, name: 'Imhotep', of: 'god of crafts and medicine', alignment: 2, level: '', active: true, url: '', symbol: 'Step pyramid', pantheon: 4, gender: 'male'},
{id: 78, name: 'Isis', of: 'goddess of fertility and magic', alignment: 2, level: '', active: true, url: '', symbol: 'Ankh and star', pantheon: 4, gender: 'female'},
{id: 79, name: 'Nephthys', of: 'goddess of death and grief', alignment: 3, level: '', active: true, url: '', symbol: 'Horns around a lunar disk', pantheon: 4, gender: 'female'},
{id: 80, name: 'Osiris', of: 'god of nature and the underworld', alignment: 1, level: '', active: true, url: '', symbol: 'Crook and flail', pantheon: 4, gender: 'male'},
{id: 81, name: 'Ptah', of: 'god of crafts, knowledge, and secrets', alignment: 4, level: '', active: true, url: '', symbol: 'Bull', pantheon: 4, gender: 'male'},
{id: 82, name: 'Set', of: 'god of darkness and desert storms', alignment: 9, level: '', active: true, url: '', symbol: 'Coiled cobra', pantheon: 4, gender: 'male'},
{id: 83, name: 'Sobek', of: 'god of water and crocodiles', alignment: 7, level: '', active: true, url: '', symbol: 'Crocodile head with horns and plumes', pantheon: 4, gender: 'male'},
{id: 84, name: 'Thoth', of: 'god of knowledge and wisdom', alignment: 5, level: '', active: true, url: '', symbol: 'Ibis', pantheon: 4, gender: 'male'},
{id: 85, name: 'Odin', of: 'god of knowledge and war', alignment: 2, level: '', active: true, url: '', symbol: 'Watching blue eye', pantheon: 5, gender: 'male'},
{id: 86, name: 'Aegir', of: 'god of the sea and storms	', alignment: 8, level: '', active: true, url: '', symbol: 'Rough ocean waves', pantheon: 5, gender: 'male'},
{id: 87, name: 'Balder', of: 'god of beauty and poetry', alignment: 2, level: '', active: true, url: '', symbol: 'Gem-encrusted silver chalice', pantheon: 5, gender: 'male'},
{id: 88, name: 'Forseti', of: 'god of justice and law', alignment: 5, level: '', active: true, url: '', symbol: 'Head of a bearded man', pantheon: 5, gender: 'male'},
{id: 89, name: 'Frey', of: 'god of fertility and the sun', alignment: 2, level: '', active: true, url: '', symbol: 'Ice-blue greatsword', pantheon: 5, gender: 'male'},
{id: 90, name: 'Freya', of: 'goddess of fertility and love', alignment: 2, level: '', active: true, url: '', symbol: 'Falcon', pantheon: 5, gender: 'female'},
{id: 91, name: 'Frigga', of: 'goddess of birth and fertility', alignment: 5, level: '', active: true, url: '', symbol: 'Cat', pantheon: 5, gender: 'female'},
{id: 92, name: 'Heimdall', of: 'god of watchfulness and loyalty', alignment: 1, level: '', active: true, url: '', symbol: 'Curling musical horn', pantheon: 5, gender: 'male'},
{id: 93, name: 'Hel', of: 'goddess of the underworld', alignment: 8, level: '', active: true, url: '', symbol: 'Face of a woman, rotting on one side', pantheon: 5, gender: 'female'},
{id: 94, name: 'Hermod', of: 'god of luck', alignment: 6, level: '', active: true, url: '', symbol: 'Winged scroll', pantheon: 5, gender: 'male'},
{id: 95, name: 'Loki', of: 'god of thieves and trickery', alignment: 9, level: '', active: true, url: '', symbol: 'Flame', pantheon: 5, gender: 'male'},
{id: 96, name: 'Njord', of: 'god of sea and wind', alignment: 2, level: '', active: true, url: '', symbol: 'Gold coin', pantheon: 5, gender: 'male'},
{id: 97, name: 'Odur', of: 'god of light and the sun', alignment: 3, level: '', active: true, url: '', symbol: 'Solar disk', pantheon: 5, gender: 'male'},
{id: 98, name: 'Sif', of: 'goddess of war', alignment: 3, level: '', active: true, url: '', symbol: 'Upraised sword', pantheon: 5, gender: 'female'},
{id: 99, name: 'Skadi', of: 'god of earth and mountains', alignment: 5, level: '', active: true, url: '', symbol: 'Mountain peak', pantheon: 5, gender: 'male'},
{id: 100, name: 'Surtur', of: 'god of fire giants and war', alignment: 7, level: '', active: true, url: '', symbol: 'Flaming sword', pantheon: 5, gender: 'male'},
{id: 101, name: 'Thor', of: 'god of storms and thunder	', alignment: 3, level: '', active: true, url: '', symbol: 'Hammer', pantheon: 5, gender: 'male'},
{id: 102, name: 'Thrym', of: 'god of frost giants and cold', alignment: 9, level: '', active: true, url: '', symbol: 'White double-bladed axe', pantheon: 5, gender: 'male'},
{id: 103, name: 'Tyr', of: 'god of courage and strategy', alignment: 4, level: '', active: true, url: '', symbol: 'Sword', pantheon: 5, gender: 'male'},
{id: 104, name: 'Uller', of: 'god of hunting and winter', alignment: 6, level: '', active: true, url: '', symbol: 'Longbow', pantheon: 5, gender: 'male'},
{id: 105, name: 'Boccob', of: 'god of Uncaring', alignment: 5, level: 'Greater', active: true, url: '', symbol: 'Eye in Pentagram', pantheon: 6, gender: 'male'},
{id: 106, name: 'Ehlonna', of: 'goddess of the Forests', alignment: 2, level: 'Lesser', active: true, url: '', symbol: 'Unicorn horn', pantheon: 6, gender: 'female'},
{id: 107, name: 'Fharlanghn', of: 'god of travellers and adventurers, the Dweller on the Horizon.', alignment: 5, level: 'Lesser', active: true, url: '', symbol: 'Disc with a curved line across it (the horizon).', pantheon: 6, gender: 'male'},
{id: 108, name: 'Geshtai', of: 'goddess (daughter) or the Oasis', alignment: 5, level: 'Lesser', active: true, url: '', symbol: 'A water spout', pantheon: 6, gender: 'female'},
{id: 109, name: 'Heironeous', of: 'god of Chivalry, Justice, Honor, War, Daring, and Valor. (aka: Heironeous the Invincible)', alignment: 1, level: 'Lesser', active: true, url: '', symbol: 'Silver lightning bolt, often clutched in a fist.', pantheon: 6, gender: 'male'},
{id: 110, name: 'Hextor', of: 'god of War, Discord, and Massacres. (aka: Scourge of Battle, Champion of Evil, Herald of Hell)', alignment: 7, level: 'Lesser', active: true, url: '', symbol: 'Fist holding six red arrows facing downward in a fan.', pantheon: 6, gender: 'male'},
{id: 111, name: 'Iuz the Old', of: 'demigod of Deceit, Evil, Oppression, Pain, and Wickedness.', alignment: 9, level: 'Demigod', active: true, url: '', symbol: 'Grinning skull', pantheon: 6, gender: 'male'},
{id: 112, name: 'Kord', of: 'god of strength (aka: Kord the Brawler)', alignment: 3, level: 'Greater', active: true, url: '', symbol: 'Amulet with a white-gauntleted fist', pantheon: 6, gender: 'male'},
{id: 113, name: 'Nerull', of: 'god of death', alignment: 8, level: 'Greater', active: true, url: '', symbol: 'Scythe and skull', pantheon: 6, gender: 'male'},
{id: 114, name: 'Norebo', of: 'god of Chance (god of Luck, Gambling, and Risks)', alignment: 6, level: 'Lesser', active: true, url: '', symbol: 'Pair of 8-sided dice', pantheon: 6, gender: 'male'},
{id: 115, name: 'Obad-Hai', of: 'god of nature. (aka: Obad-Hai the Shalm)', alignment: 5, level: 'Lesser', active: true, url: '', symbol: 'Oak leaf and acorn.', pantheon: 6, gender: 'male'},
{id: 116, name: 'Olidammara', of: 'god of rogues', alignment: 6, level: 'Lesser', active: true, url: '', symbol: 'Laughing mask', pantheon: 6, gender: 'male'},
{id: 117, name: 'Procan', of: 'god of seas, sea life, salt, sea weather, and navigation.', alignment: 6, level: 'Greater', active: true, url: '', symbol: 'Trident made of coral and gold cresting a wave', pantheon: 6, gender: 'male'},
{id: 118, name: 'Saint Cuthbert', of: 'god of retribution', alignment: 1, level: 'Lesser', active: true, url: '', symbol: 'Wooden billet', pantheon: 6, gender: 'male'},
{id: 119, name: 'Wee Jas', of: 'goddess of death and magic. (aka: Witch Goddess, Ruby Sorceress, Stern Lady, and Death\'s Guardian)', alignment: 7, level: 'Greater', active: true, url: '', symbol: 'Skull lit by a fireball', pantheon: 6, gender: 'female'},
{id: 120, name: 'Erythnul', of: 'god of hate, envy, malice, panic, ugliness, and slaughter. (aka: The Many)', alignment: 9, level: 'Intermediate', active: true, url: '', symbol: 'Red blood drop, or a bestial mask representing Erythnul\'s changing visage', pantheon: 6, gender: 'male'},


      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('deities_id_seq', (SELECT MAX(id) FROM deities));`
      )
    })
}
