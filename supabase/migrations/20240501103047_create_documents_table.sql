create table documents (
  id serial primary key,
  document_name text unique not null,
  created_on date default current_date,
  last_modified date default current_date,
  document_content text
  );