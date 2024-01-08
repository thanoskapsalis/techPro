create table expense
(
    id        bigserial
        primary key,
    category  varchar(255)     not null
        constraint expense_category_check
            check ((category)::text = ANY
                   ((ARRAY ['FOOD'::character varying, 'TRANSPORT'::character varying, 'ENTERTAINMENT'::character varying, 'HYGIENE'::character varying, 'OTHER'::character varying])::text[])),
    cost      double precision not null,
    product   varchar(255),
    timestamp timestamp(6)     not null
);

alter table expense
    owner to username;

