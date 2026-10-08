import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { projects } from '../data/projects.ts';
import { profile } from '../data/profile.ts';
import { notes } from '../content/notes.ts';
import { publications } from '../data/publications.ts';
const slugs = new Set();
const checkMedia = (media) => {
  if (media.type === 'placeholder') return;
  const paths =
    media.type === 'comparison'
      ? [media.before, media.after]
      : [
          media.src,
          ...(media.type === 'video' ? [media.poster, media.captions] : []),
        ];
  for (const path of paths.filter(Boolean))
    if (path.startsWith('/'))
      assert.ok(
        existsSync(new URL('../public' + path, import.meta.url)),
        'Missing media ' + path,
      );
  assert.ok(media.alt.trim(), 'Media needs alt text');
};
for (const project of projects) {
  assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(!slugs.has(project.slug), 'Duplicate project slug');
  slugs.add(project.slug);
  for (const field of ['title', 'summary', 'overview', 'problem'])
    assert.ok(project[field]?.trim(), project.slug + ' missing ' + field);
  for (const field of ['approach', 'contribution', 'experiments', 'results'])
    assert.ok(project[field]?.length, project.slug + ' missing ' + field);
  for (const media of [
    ...project.demo,
    ...(project.cover ? [project.cover] : []),
    ...(project.architecture ? [project.architecture] : []),
  ])
    checkMedia(media);
  for (const link of project.links)
    assert.ok(/^(https?:\/\/|\/)/.test(link.href), 'Invalid project link');
}
for (const records of [notes, publications])
  assert.equal(
    new Set(records.map((x) => x.slug)).size,
    records.length,
    'Duplicate content slug',
  );
if (profile.resumeAvailable)
  assert.ok(
    existsSync(new URL('../public' + profile.links.resume, import.meta.url)),
    'Resume enabled but PDF missing',
  );
assert.ok(
  existsSync(new URL('../public/og.png', import.meta.url)),
  'Social preview missing',
);
console.log(
  'Content checks passed: ' +
    projects.length +
    ' projects, ' +
    notes.length +
    ' notes, ' +
    publications.length +
    ' publications.',
);

import { filterProjects } from '../lib/project-search.ts';
assert.equal(filterProjects(projects, 'All work', '').length, projects.length);
assert.deepEqual(
  filterProjects(projects, 'Robotics', '  VLA  ').map((p) => p.slug),
  ['robot-learning-research'],
);
assert.deepEqual(
  filterProjects(projects, 'Robotics', 'multimodal ROS').map((p) => p.slug),
  ['multimodal-robot-navigation'],
);
assert.equal(filterProjects(projects, 'Perception', 'ROS 2').length, 0);
assert.deepEqual(
  filterProjects(projects, 'Robotics', 'voice public ros').map((p) => p.slug),
  ['voice-guided-person-following'],
);
assert.equal(
  filterProjects(projects, 'All work', 'nonexistenttopic').length,
  0,
);
console.log(
  'Project search checks passed: case folding, technology search, multi-term matching, combined filters, and empty results.',
);
