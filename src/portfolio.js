const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://poovarasan.github.io/portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Poovarasan',
  role: 'Mechanical enigineer',
  description:
    'I’m a mechanical engineering student passionate about materials research and sustainable innovation. With hands-on experience in polymer composites and material testing, I aim to develop eco-friendly, high-performance solutions in manufacturing, automation, and renewable energy systems.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Mechanical, thermal and water absorption properties of Bauhinia PurpureaL.fiber reinforced vinyl ester composites',
    description:
      'Conducted experiments to analyse the thermal and mechanical properties ofnatural fiber-reinforced polymer composites for potential application in lightweight, high-strength components',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Solar Panel Cleaning Robot (Ongoing Project – in association with SNTEL)',
    description:
      'Currently working on the development of an automated robot to clean solar panels efficiently. The system is designed with guiding wheels for straight movement and mechanical joints to help it turn accurately. The focus is on building a lightweight and mobile structure that can clean panels using minimal water, supporting clean energy through mechanical automation.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Book Chapter',
    description:
      'Role of plant fibres in tribological behaviour of composites - Tribology of Fiber materials and Composites.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'MS Office',
  'MATLAB',
  'ANSYS APDL',
  'Origin',
  'ImageJ',
  'Solidworks',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'apoovarasan.me@gmail.com',
}

export { header, about, projects, skills, contact }
