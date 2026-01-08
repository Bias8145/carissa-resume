-- Create a public storage bucket for the portfolio
insert into storage.buckets (id, name, public)
values ('portfolio', 'portfolio', true)
on conflict (id) do nothing;

-- Set up security policies to allow public read access
create policy "Public Access"
  on storage.objects for select
  using ( bucket_id = 'portfolio' );

-- Allow authenticated uploads (optional, mostly for admin usage)
create policy "Authenticated Uploads"
  on storage.objects for insert
  to authenticated
  with check ( bucket_id = 'portfolio' );
