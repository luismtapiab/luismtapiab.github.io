export interface Repo {
  id: string;
  label?: string;
}

export const compilersRepos: Repo[] = [
  { id: 'luismtapiab/TL-cbs', label: 'TL-CBS — Toy Language with CBS Semantics' },
  { id: 'plancomps/CBS-beta', label: 'CBS-Beta — Component-Based Semantics Framework' },
  { id: 'luismtapiab/java2ssm', label: 'Java2SSM — Java to State Machine Compiler' },
];

export const otherRepos: Repo[] = [
  { id: 'jesusjimeneztapia/chatbot-agetic', label: 'Chatbot AGETIC' },
  { id: 'luismtapiab/gob-bo-scrapper', label: 'Bolivia Gov Scrapper' },
  { id: 'luismtapiab/hold_n_release_multicommand', label: 'Hold & Release Multi-Command' },
];
