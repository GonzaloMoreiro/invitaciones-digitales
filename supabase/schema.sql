-- Esquema inicial: sistema de invitaciones digitales
-- owner_id ya presente desde el día 1 para poder escalar a multi-organizador después

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  owner_id uuid, -- hoy siempre el mismo (vos); a futuro, cada organizador
  title text not null,
  event_date timestamptz not null,
  location_name text,
  location_map_url text,
  cover_image_url text,
  show_gallery boolean default false,
  show_story boolean default false,
  story_text text,
  gift_info text,
  created_at timestamptz default now()
);

create table if not exists event_photos (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references events(id) on delete cascade,
  photo_url text not null,
  sort_order int default 0
);

create table if not exists rsvps (
  id uuid primary key default gen_random_uuid(),
  event_id uuid references events(id) on delete cascade,
  guest_name text not null,
  attending boolean not null,
  companions int default 0,
  message text,
  created_at timestamptz default now()
);
