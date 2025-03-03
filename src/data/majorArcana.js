// Major Arcana cards with enhanced ASCII art
const majorArcana = [
    {
      id: 0,
      name: "Le Mat (0)",
      reversed: "Recklessness, poor choices, folly",
      upright: "Beginnings, spontaneity, faith, innocence",
      ascii: `
  ┌───────────────┐
  │ 0             │
  │        ⍟      │
  │     /╭─╮\\     │
  │     │⦿⦿│      │
  │     ╰─╯       │
  │     /|\\       │
  │    / | \\      │
  │   /  |  \\     │
  │  /╲__|__/╲    │
  │      ~        │
  │             0 │
  └───────────────┘`
    },
    {
      id: 1,
      name: "Le Bateleur (I)",
      reversed: "Trickery, deception, manipulation",
      upright: "Skill, creativity, potential, dexterity",
      ascii: `
  ┌───────────────┐
  │ I             │
  │     ╭───╮     │
  │     │╭─╮│     │
  │    ╭│⦿⦿│╮     │
  │    ││╰─╯││    │
  │    ╰─────╯    │
  │     _|_|_     │
  │    / ╭─╮ \\    │
  │   ╱  ╰─╯  ╲   │
  │  ╱         ╲  │
  │             I │
  └───────────────┘`
    },
    {
      id: 2,
      name: "La Papesse (II)",
      reversed: "Blocked intuition, secrets, repressed feelings",
      upright: "Wisdom, intuition, mystery, spirituality",
      ascii: `
  ┌───────────────┐
  │ II            │
  │    ╭─────╮    │
  │    │╭───╮│    │
  │    ││╳╳╳││    │
  │    │╰───╯│    │
  │    ╰─╥─╥─╯    │
  │      ║ ║      │
  │    ╭─╨─╨─╮    │
  │    │╔═══╗│    │
  │    ╰╚═══╝╯    │
  │            II │
  └───────────────┘`
    },
    {
      id: 3,
      name: "L'Impératrice (III)",
      reversed: "Dependency, blockage, creative block",
      upright: "Abundance, nurturing, fertility, creativity",
      ascii: `
  ┌───────────────┐
  │ III           │
  │      ♔        │
  │    ╭───╮      │
  │   /│⦿⦿│\\      │
  │  / ╰───╯ \\    │
  │  \\  ╭─╮  /    │
  │   \\_╰─╯_/     │
  │   /╲╱│╲╱\\     │
  │  ╱___│___╲    │
  │      ▼        │
  │           III │
  └───────────────┘`
    },
    {
      id: 4,
      name: "L'Empereur (IV)",
      reversed: "Domination, rigidity, inflexibility",
      upright: "Authority, structure, control, leadership",
      ascii: `
  ┌───────────────┐
  │ IV            │
  │     ╭───╮     │
  │     │▲▲▲│     │
  │     ╰───╯     │
  │    ╭─────╮    │
  │    │╭───╮│    │
  │    ││⦿⦿││    │
  │    │╰───╯│    │
  │    ╰╥───╥╯    │
  │     ║   ║     │
  │            IV │
  └───────────────┘`
    },
    {
      id: 5,
      name: "Le Pape (V)",
      reversed: "Rebellion, subversion, new approaches",
      upright: "Tradition, conformity, belief, guidance",
      ascii: `
  ┌───────────────┐
  │ V             │
  │     ╭───╮     │
  │     │╳╳╳│     │
  │     ╰───╯     │
  │    ╭─────╮    │
  │    │╭─╮╭─╮│   │
  │    ││⦿││⦿││   │
  │    │╰─╯╰─╯│   │
  │    ╰╥───╥╯    │
  │     ║   ║     │
  │             V │
  └───────────────┘`
    },
    {
      id: 6,
      name: "L'Amoureux (VI)",
      reversed: "Misalignment, conflict, disharmony",
      upright: "Love, harmony, choices, alignment",
      ascii: `
  ┌───────────────┐
  │ VI            │
  │       ☀       │
  │      /|\\      │
  │     / | \\     │
  │    /  |  \\    │
  │   ╭─╮ | ╭─╮   │
  │   │⦿│ | │⦿│   │
  │   ╰─╯ | ╰─╯   │
  │    \\  |  /    │
  │     \\ | /     │
  │            VI │
  └───────────────┘`
    },
    {
      id: 7,
      name: "Le Chariot (VII)",
      reversed: "Lack of direction, defeat, loss of control",
      upright: "Victory, determination, control, willpower",
      ascii: `
  ┌───────────────┐
  │ VII           │
  │     ╭───╮     │
  │     │╳╳╳│     │
  │     ╰───╯     │
  │    ╭─────╮    │
  │    │╭───╮│    │
  │    ││⦿⦿││    │
  │    │╰───╯│    │
  │  ╭─┴─────┴─╮  │
  │  ◯         ◯  │
  │           VII │
  └───────────────┘`
    },
    {
      id: 8,
      name: "La Justice (VIII)",
      reversed: "Unfairness, dishonesty, injustice",
      upright: "Justice, fairness, truth, cause and effect",
      ascii: `
  ┌───────────────┐
  │ VIII          │
  │     ╭───╮     │
  │     │▽▽▽│     │
  │     ╰───╯     │
  │    ╭─────╮    │
  │    │╭───╮│    │
  │    ││⦿⦿││    │
  │    │╰───╯│    │
  │    ╰──┬──╯    │
  │     ╭─┴─╮     │
  │         VIII  │
  └───────────────┘`
    },
    {
      id: 9,
      name: "L'Hermite (IX)",
      reversed: "Isolation, loneliness, withdrawal",
      upright: "Introspection, solitude, guidance, wisdom",
      ascii: `
  ┌───────────────┐
  │ IX            │
  │      ☄        │
  │     ╭─╮       │
  │     │*│       │
  │     ╰─╯       │
  │    ╭───╮      │
  │    │╭─╮│      │
  │    ││⦿││      │
  │    │╰─╯│      │
  │    ╰─┬─╯      │
  │           IX  │
  └───────────────┘`
    },
    {
      id: 10,
      name: "La Roue de Fortune (X)",
      reversed: "Bad luck, resistance to change, breaking cycles",
      upright: "Change, cycles, inevitable fate, turning point",
      ascii: `
  ┌───────────────┐
  │ X             │
  │     ╭───╮     │
  │    /│╳╳╳│\\    │
  │   / ╰───╯ \\   │
  │  /  ╭───╮  \\  │
  │ |   │╳╳╳│   | │
  │  \\  ╰───╯  /  │
  │   \\ ╭───╮ /   │
  │    \\│╳╳╳│/    │
  │     ╰───╯     │
  │             X │
  └───────────────┘`
    },
    {
      id: 11,
      name: "La Force (XI)",
      reversed: "Self-doubt, weakness, insecurity",
      upright: "Strength, courage, persuasion, influence",
      ascii: `
  ┌───────────────┐
  │ XI            │
  │     ∞         │
  │   ╭─────╮     │
  │   │╭───╮│     │
  │   ││⦿⦿││     │
  │   │╰───╯│     │
  │   ╰──┬──╯     │
  │    ╭─┴─╮      │
  │   /│╳╳╳│\\     │
  │  / ╰───╯ \\    │
  │            XI │
  └───────────────┘`
    },
    {
      id: 12,
      name: "Le Pendu (XII)",
      reversed: "Resistance, stalling, indecision",
      upright: "Surrender, sacrifice, perspective, suspension",
      ascii: `
  ┌───────────────┐
  │ XII           │
  │   ╔═════╗     │
  │   ║     ║     │
  │   ║  │  ║     │
  │   ║ ╭─╮ ║     │
  │   ║ │⦿│ ║     │
  │   ║ ╰─╯ ║     │
  │   ║ ╱ ╲ ║     │
  │   ║╱   ╲║     │
  │   ╚═════╝     │
  │           XII │
  └───────────────┘`
    },
    {
      id: 13,
      name: "L'Arcane sans nom (XIII)",
      reversed: "Stagnation, resistance, denial",
      upright: "Transformation, endings, transition, letting go",
      ascii: `
  ┌───────────────┐
  │ XIII          │
  │     ☠         │
  │   ╭─────╮     │
  │   │╳╳╳╳╳│     │
  │   ╰─────╯     │
  │   __|____|    │
  │  /  |    \\    │
  │ /   |     \\   │
  │/    |      \\  │
  │     │         │
  │          XIII │
  └───────────────┘`
    },
    {
      id: 14,
      name: "Tempérance (XIV)",
      reversed: "Imbalance, excess, disharmony",
      upright: "Balance, moderation, patience, purpose",
      ascii: `
  ┌───────────────┐
  │ XIV           │
  │      △        │
  │     ╱ ╲       │
  │    ╱   ╲      │
  │   ╱     ╲     │
  │  ╭───────╮    │
  │  │╭─────╮│    │
  │  ││⦿   ⦿││    │
  │  │╰─────╯│    │
  │  ╰───────╯    │
  │           XIV │
  └───────────────┘`
    },
    {
      id: 15,
      name: "Le Diable (XV)",
      reversed: "Releasing bonds, freedom, restoring control",
      upright: "Materialism, bondage, addiction, sexuality",
      ascii: `
  ┌───────────────┐
  │ XV            │
  │    ╭─────╮    │
  │    │╳╳╳╳╳│    │
  │    ╰─────╯    │
  │    ╭─────╮    │
  │    │╭─╮╭─╮│   │
  │    │╰─╯╰─╯│   │
  │    │╭───╮│    │
  │   /│╰───╯│\\   │
  │  / ╰─────╯ \\  │
  │            XV │
  └───────────────┘`
    },
    {
      id: 16,
      name: "La Maison Dieu (XVI)",
      reversed: "Disaster avoided, fear of change, resistance",
      upright: "Sudden change, upheaval, revelation, awakening",
      ascii: `
  ┌───────────────┐
  │ XVI           │
  │     \\⚡/      │
  │   ╔═════╗     │
  │   ║╔═══╗║     │
  │   ║║   ║║     │
  │   ║║   ║║     │
  │   ║╚═══╝║     │
  │   ╚═════╝     │
  │    ╱   ╲      │
  │   ╱     ╲     │
  │           XVI │
  └───────────────┘`
    },
    {
      id: 17,
      name: "L'Étoile (XVII)",
      reversed: "Insecurity, discouragement, faithlessness",
      upright: "Hope, inspiration, renewal, serenity",
      ascii: `
  ┌───────────────┐
  │ XVII          │
  │      ★        │
  │    ★ ★ ★      │
  │   ★  ★  ★     │
  │     ╭───╮     │
  │     │⦿⦿│     │
  │     ╰───╯     │
  │      /|\\      │
  │     / | \\     │
  │ ≈≈≈≈≈≈≈≈≈≈≈≈≈ │
  │          XVII │
  └───────────────┘`
    },
    {
      id: 18,
      name: "La Lune (XVIII)",
      reversed: "Release of fear, clarity, renewal",
      upright: "Illusion, fear, insecurity, unconscious",
      ascii: `
  ┌───────────────┐
  │ XVIII         │
  │      ◑        │
  │    * * *      │
  │   *     *     │
  │     ╭ ╮ ╭ ╮   │
  │     │ │ │ │   │
  │     │ │ │ │   │
  │     │ │ │ │   │
  │     │ │ │ │   │
  │ ≈≈≈≈≈≈≈≈≈≈≈≈≈ │
  │         XVIII │
  └───────────────┘`
    },
    {
      id: 19,
      name: "Le Soleil (XIX)",
      reversed: "Blocked happiness, depression, negativity",
      upright: "Joy, success, celebration, positivity",
      ascii: `
  ┌───────────────┐
  │ XIX           │
  │      \\☼/      │
  │      ☼☼☼      │
  │      /☼\\      │
  │               │
  │   ╭─╮   ╭─╮   │
  │   │⦿│   │⦿│   │
  │   ╰─╯   ╰─╯   │
  │    │     │    │
  │    │     │    │
  │           XIX │
  └───────────────┘`
    },
    {
      id: 20,
      name: "Le Jugement (XX)",
      reversed: "Self-doubt, inner critic, ignoring the call",
      upright: "Rebirth, inner calling, absolution, awakening",
      ascii: `
  ┌───────────────┐
  │ XX            │
  │      ☄        │
  │     _||_      │
  │    /    \\     │
  │    │    │     │
  │   ╭──────╮    │
  │   │╭────╮│    │
  │   ││⦿⦿││    │
  │   │╰────╯│    │
  │   ╰──────╯    │
  │            XX │
  └───────────────┘`
    },
    {
      id: 21,
      name: "Le Monde (XXI)",
      reversed: "Incomplete goals, delays, lack of closure",
      upright: "Completion, achievement, fulfillment, wholeness",
      ascii: `
  ┌───────────────┐
  │ XXI           │
  │    ╭─────╮    │
  │    │╭───╮│    │
  │ ◐  ││⦿⦿││  ◑  │
  │    │╰───╯│    │
  │    ╰─────╯    │
  │       │       │
  │      /|\\      │
  │     / | \\     │
  │    /  |  \\    │
  │           XXI │
  └───────────────┘`
    }
  ];
  
  export default majorArcana;