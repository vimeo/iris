export const data = [
  {
    name: 'Accessibility',
    subCategories: [
      {
        name: 'General',
        items: [
          {
            name: 'WCAG Score',
            goals: [
              { score: 'WCAG 2.0 AA', year: 2021, quarters: [3, 4] },
              {
                score: 'WCAG 3.0 Silver',
                year: 2022,
                quarters: [3, 4, 1],
              },
              {
                score: 'WCAG 3.1 Gold',
                year: 2023,
                quarters: [4, 1],
              },
            ],
          },
          {
            name: 'Color Accessibility Tools',
            goals: [{ year: 2021, quarters: [3] }],
          },
          {
            name: 'Establish Custom Standard',
            goals: [{ year: 2022, quarters: [3] }],
          },
        ],
      },
    ],
  },
  {
    name: 'Adoption',
    subCategories: [
      {
        name: 'Web',
        items: [
          {
            name: 'Web UI (all products)',
            goals: [
              {
                score: '25%',
                year: 2021,
                quarters: [3],
                partial: true,
              },
              {
                score: '50%',
                year: 2022,
                quarters: [1, 2],
                partial: true,
              },
              { score: '100%', year: 2023, quarters: [1] },
            ],
          },
          {
            name: 'Vimeo Player',
            goals: [
              { year: 2021, quarters: [4], partial: true },
              { year: 2022, quarters: [2] },
            ],
          },
        ],
      },
      {
        name: 'Native',
        items: [
          {
            name: 'iOS',
            goals: [
              { year: 2022, quarters: [1], partial: true },
              { year: 2022, quarters: [4] },
            ],
          },
          {
            name: 'tvOS',
            goals: [
              { year: 2023, quarters: [1], partial: true },
              { year: 2023, quarters: [4] },
            ],
            events: [{ year: 2022, quarters: [1], partial: true }],
          },
          {
            name: 'Android',
            goals: [
              { year: 2023, quarters: [2], partial: true },
              { year: 2024, quarters: [1] },
            ],
            events: [{ year: 2022, quarters: [1], partial: true }],
          },
        ],
      },
      {
        name: 'Other',
        items: [
          {
            name: 'Other',
            goals: [
              { year: 2022, quarters: [4], partial: true },
              { year: 2023, quarters: [3] },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Code (General)',
    subCategories: [
      {
        name: 'Support',
        items: [
          {
            name: 'JavaScript (No Framework)',
            goals: [{ year: 2022, quarters: [1, 2, 3] }],
          },
          {
            name: 'CSS',
            goals: [{ year: 2021, quarters: [3, 4, 1, 2] }],
          },
          {
            name: 'SCSS',
            goals: [{ year: 2022, quarters: [2, 3, 4] }],
          },
          {
            name: 'Swift',
            goals: [{ year: 2022, quarters: [1, 2, 3, 4, 1] }],
          },
          {
            name: 'Java',
            goals: [{ year: 2023, quarters: [1, 2, 3, 4, 1] }],
          },
        ],
      },
      {
        name: 'Developer Experience',
        items: [
          {
            name: 'dev-env console errors',
            goals: [{ year: 2021, quarters: [2, 3] }],
          },
          {
            name: 'dev-env visual errors',
            goals: [{ year: 2021, quarters: [4, 1] }],
          },
        ],
      },
      {
        name: 'Standards',
        items: [
          { name: 'ESLint', goals: [{ year: 2021, quarters: [3] }] },
          {
            name: 'tsconfig',
            goals: [{ year: 2021, quarters: [3] }],
          },
          {
            name: 'stylelint',
            goals: [{ year: 2021, quarters: [2, 3] }],
          },
          {
            name: 'codemods',
            goals: [{ year: 2022, quarters: [3, 4] }],
          },
        ],
      },
      {
        name: 'Testing',
        items: [
          {
            name: 'Accessibility Tests',
            goals: [
              { year: 2021, quarters: [4] },
              { year: 2022, quarters: [4, 1] },
            ],
            events: [{ year: 2024, quarters: [1], partial: true }],
          },
          {
            name: 'Performance Tests',
            goals: [{ year: 2022, quarters: [2, 3] }],
            events: [
              { year: 2023, quarters: [1], partial: true },
              { year: 2024, quarters: [1], partial: true },
            ],
          },
          {
            name: 'Snapshot Tests',
            goals: [{ year: 2021, quarters: [4, 1] }],
            events: [
              { year: 2023, quarters: [1], partial: true },
              { year: 2024, quarters: [1], partial: true },
            ],
          },
          {
            name: 'Visual Regression Tests',
            goals: [{ year: 2021, quarters: [3, 4] }],
            events: [
              { year: 2023, quarters: [1], partial: true },
              { year: 2024, quarters: [1], partial: true },
            ],
          },
          {
            name: 'Unit Tests',
            goals: [{ year: 2022, quarters: [1, 2] }],
            events: [
              { year: 2023, quarters: [1], partial: true },
              { year: 2024, quarters: [1], partial: true },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Design Tokens',
    subCategories: [
      {
        name: 'Phases',
        items: [
          {
            name: 'Phases',
            goals: [
              { score: 'Phase 1', year: 2021, quarters: [1] },
              { score: 'Phase 2', year: 2021, quarters: [2] },
              { score: 'Phase 3', year: 2021, quarters: [3] },
              { score: 'Phase 4', year: 2021, quarters: [4] },
              { score: 'Phase 5', year: 2022, quarters: [1] },
            ],
            events: [{ year: 2023, quarters: [3], partial: true }],
          },
          {
            name: 'Universal Dark Mode',
            goals: [{ year: 2021, quarters: [4] }],
            events: [{ year: 2023, quarters: [3], partial: true }],
          },
          {
            name: 'Accessibility Modes',
            goals: [{ year: 2022, quarters: [1, 2] }],
            events: [{ year: 2023, quarters: [3], partial: true }],
          },
          {
            name: 'Public Token Registry',
            goals: [{ year: 2022, quarters: [1, 2] }],
            events: [{ year: 2023, quarters: [1], partial: true }],
          },
          {
            name: 'Visual Theme Builder (Tool)',
            goals: [{ year: 2022, quarters: [3] }],
          },
          {
            name: 'Advanced Themes',
            goals: [{ year: 2022, quarters: [3] }],
          },
        ],
      },
    ],
  },
  {
    name: 'Documentation',
    subCategories: [
      {
        name: 'Design',
        items: [
          {
            name: 'Accessibility',
            goals: [
              {
                year: 2021,
                quarters: [4],
              },
            ],
            events: [
              { year: 2022, quarters: [4], partial: true },
              { year: 2023, quarters: [4], partial: true },
            ],
          },
          {
            name: 'Guidelines & Examples',
            goals: [
              {
                year: 2021,
                quarters: [4],
              },
            ],
            events: [
              { year: 2022, quarters: [4], partial: true },
              { year: 2023, quarters: [4], partial: true },
            ],
          },
          {
            name: 'Anatomy',
            goals: [
              {
                year: 2021,
                quarters: [3],
              },
            ],
            events: [
              { year: 2022, quarters: [2], partial: true },
              { year: 2023, quarters: [2], partial: true },
            ],
          },
          {
            name: 'Implementation (React)',
            goals: [
              {
                year: 2022,
                quarters: [1],
              },
            ],
            events: [
              { year: 2022, quarters: [2], partial: true },
              { year: 2023, quarters: [2], partial: true },
            ],
          },
        ],
      },
      {
        name: 'Content & UX Writing',
        items: [
          {
            name: 'Transfer Existing Styleguide',
            goals: [{ year: 2021, quarters: [4] }],
          },
          {
            name: 'Per Component Docs',
            goals: [{ year: 2021, quarters: [3] }],
            events: [
              { year: 2022, quarters: [2], partial: true },
              { year: 2023, quarters: [2], partial: true },
            ],
          },
        ],
      },
      {
        name: 'Encyclopedia',
        items: [
          {
            name: 'Encyclopedia',
            goals: [{ year: 2021, quarters: [3] }],
          },
        ],
      },
    ],
  },
  {
    name: 'Open Source',
    subCategories: [
      {
        name: 'Outreach',
        items: [
          {
            name: 'Website',
            goals: [{ year: 2021, quarters: [3] }],
            events: [
              { year: 2022, quarters: [3], partial: true },
              { year: 2023, quarters: [3], partial: true },
            ],
          },
          {
            name: 'Blog',
            goals: [{ year: 2021, quarters: [3] }],
            events: [
              { year: 2022, quarters: [3], partial: true },
              { year: 2023, quarters: [3], partial: true },
            ],
          },
        ],
      },
      {
        name: 'Resources',
        items: [
          {
            name: 'Roadmap',
            goals: [
              { year: 2021, quarters: [1], partial: true },
              { year: 2021, quarters: [2] },
            ],
            events: [
              { year: 2022, quarters: [1], partial: true },
              { year: 2023, quarters: [1], partial: true },
            ],
          },
          {
            name: 'Component Status Tracker',
            goals: [{ year: 2021, quarters: [2] }],
            events: [
              { year: 2022, quarters: [1], partial: true },
              { year: 2023, quarters: [1], partial: true },
            ],
          },
          {
            name: 'Public Token Registry',
            goals: [{ year: 2022, quarters: [1, 2] }],
            events: [{ year: 2023, quarters: [1], partial: true }],
          },
        ],
      },
    ],
  },
  {
    name: 'Process',
    subCategories: [
      {
        name: 'Figma',
        items: [
          {
            name: 'Build Component Library',
            goals: [{ year: 2021, quarters: [1, 2, 3] }],
          },
          {
            name: 'Sync Design Tokens',
            goals: [{ year: 2021, quarters: [3, 4] }],
          },
          {
            name: 'Handoff Plugin',
            goals: [{ year: 2021, quarters: [4, 1] }],
          },
          {
            name: 'Sync React Components',
            goals: [{ year: 2022, quarters: [3, 4] }],
          },
          {
            name: 'JSX Pragma',
            goals: [
              { year: 2021, quarters: [2, 3], partial: true },
              { year: 2022, quarters: [4, 1, 2] },
            ],
          },
          {
            name: 'HMR Figma <—> Code',
            goals: [{ year: 2023, quarters: [3, 4, 1] }],
          },
        ],
      },
      {
        name: 'Storybook',
        items: [
          {
            name: 'Storybook Guidance',
            goals: [{ year: 2021, quarters: [3] }],
            events: [
              { year: 2022, quarters: [2], partial: true },
              { year: 2023, quarters: [1], partial: true },
              { year: 2024, quarters: [1], partial: true },
            ],
          },
        ],
      },
      {
        name: 'Github',
        items: [
          {
            name: 'Design Review',
            goals: [{ year: 2021, quarters: [4, 1] }],
            events: [
              { year: 2022, quarters: [4], partial: true },
              { year: 2023, quarters: [4], partial: true },
            ],
          },
        ],
      },
      {
        name: 'Events',
        items: [
          {
            name: 'VDS Keynote',
            events: [
              { year: 2021, quarters: [3] },
              { year: 2022, quarters: [3] },
              { year: 2023, quarters: [3] },
            ],
          },
          {
            name: 'DSL Meeting',
            events: [
              { year: 2021, quarters: [2] },
              { year: 2021, quarters: [4] },
              { year: 2022, quarters: [1] },
              { year: 2022, quarters: [2] },
              { year: 2022, quarters: [4] },
              { year: 2023, quarters: [1] },
              { year: 2023, quarters: [2] },
              { year: 2023, quarters: [4] },
            ],
          },
        ],
      },
      {
        name: 'Other',
        items: [
          {
            name: 'Slack Tools',
            goals: [{ year: 2022, quarters: [2, 3] }],
          },
          {
            name: 'Github Tools',
            goals: [{ year: 2022, quarters: [1, 2] }],
          },
        ],
      },
    ],
  },
  {
    name: 'Projects',
    subCategories: [
      {
        name: 'Systems',
        items: [
          {
            name: 'Iris',
            events: [
              { year: 2021, quarters: [3], partial: true },
              { year: 2022, quarters: [3], partial: true },
              { year: 2023, quarters: [3], partial: true },
            ],
          },
          {
            name: 'Animation',
            goals: [{ year: 2021, quarters: [3, 4] }],
            events: [{ year: 2023, quarters: [3], partial: true }],
          },
          {
            name: 'Color',
            goals: [{ year: 2021, quarters: [3, 4] }],
            events: [{ year: 2023, quarters: [3], partial: true }],
          },
          {
            name: 'SVG',
            goals: [{ year: 2021, quarters: [4, 1] }],
            events: [{ year: 2023, quarters: [3], partial: true }],
          },
          {
            name: 'Keynote',
            goals: [{ year: 2022, quarters: [3] }],
            events: [{ year: 2023, quarters: [3], partial: true }],
          },
          {
            name: 'Branding',
            goals: [{ year: 2022, quarters: [3, 4, 1] }],
            events: [{ year: 2023, quarters: [3], partial: true }],
          },
          {
            name: 'Static Content',
            goals: [{ year: 2023, quarters: [1] }],
            events: [{ year: 2023, quarters: [3], partial: true }],
          },
        ],
      },
      {
        name: 'Components',
        items: [
          {
            name: 'Data Visualization',
            goals: [{ year: 2022, quarters: [2, 3] }],
            events: [{ year: 2023, quarters: [3], partial: true }],
          },
          {
            name: 'Video (Playing & Editing)',
            goals: [{ year: 2022, quarters: [4, 1, 2, 3] }],
          },
        ],
      },
      {
        name: 'Utilities',
        items: [
          {
            name: 'Light & Shadow',
            goals: [{ year: 2022, quarters: [2] }],
            events: [{ year: 2023, quarters: [3], partial: true }],
          },
        ],
      },
    ],
  },
];
