export interface Repo {
  id: string;
  label?: string;
}

export const compilersRepos: Repo[] = [
  { id: 'luismtapiab/TL-cbs', label: 'TL-CBS — Toy Language with CBS Semantics' },
  { id: 'plancomps/CBS-beta', label: 'CBS-Beta — Component-Based Semantics Framework' },
  { id: 'luismtapiab/java2ssm', label: 'Java2SSM — Java to State Machine Compiler' },
  { id: 'luismtapiab/functionalParsers', label: 'Functional Parsers in Haskell' },
];

export const otherRepos: Repo[] = [
  { id: 'luismtapiab/supabase-ng-realtime-todo', label: 'Supabase Realtime Todo' },
  { id: 'jesusjimeneztapia/chatbot-agetic', label: 'Chatbot AGETIC' },
  { id: 'luismtapiab/gob-bo-scrapper', label: 'Bolivia Gov Scrapper' },
  { id: 'luismtapiab/hold_n_release_multicommand', label: 'Hold & Release Multi-Command' },
  { id: 'luismtapiab/ternerashop', label: 'Ternerashop E-commerce' },
];
