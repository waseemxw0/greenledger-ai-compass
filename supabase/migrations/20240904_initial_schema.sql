-- ESG overall & E/S/G breakdown (one row, will be updated over time)
create table public.esg_scores (
  id uuid primary key default gen_random_uuid(),
  score int not null check (score between 0 and 100),
  environmental int not null check (environmental between 0 and 100),
  social int not null check (social between 0 and 100),
  governance int not null check (governance between 0 and 100),
  created_at timestamptz default now() not null
);

insert into public.esg_scores (score, environmental, social, governance)
values (73, 80, 65, 75);

-- Raw emissions data (tons CO₂e per month, per scope)
create table public.emissions (
  id uuid primary key default gen_random_uuid(),
  scope int not null check (scope in (1,2,3)),
  period_date date not null,
  value numeric not null,
  created_at timestamptz default now() not null
);

insert into public.emissions (scope, period_date, value) values
  (1, '2024-01-01', 22.4),
  (1, '2024-02-01', 18.9),
  (1, '2024-03-01', 20.1),
  (2, '2024-01-01', 42.0),
  (2, '2024-02-01', 38.7),
  (2, '2024-03-01', 40.2),
  (3, '2024-01-01', 85.5),
  (3, '2024-02-01', 82.1),
  (3, '2024-03-01', 79.3);

-- Tasks
create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  status text not null default 'pending',
  due_date date,
  created_at timestamptz default now() not null
);

insert into public.tasks (title, description, status, due_date) values
  ('Collect electricity bills', 'Need Jan-Mar 2024 PDFs', 'pending', '2024-09-15'),
  ('Upload Scope 3 supplier CSV', null, 'pending', '2024-09-20');

-- Alerts
create table public.alerts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  message text,
  severity text not null default 'info',
  resolved boolean not null default false,
  created_at timestamptz default now() not null
);

insert into public.alerts (title, message, severity) values
  ('Emission spike detected', 'Scope 2 electricity increased by 10 % QoQ', 'warning');

-- Regulatory deadlines
create table public.deadlines (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  due_date date not null,
  created_at timestamptz default now() not null
);

insert into public.deadlines (title, due_date) values
  ('UK SECR report filing', '2024-10-31');