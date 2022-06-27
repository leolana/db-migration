const query = async (source) => {
  const result = await source.query(`
        with 

        -- pegando users_id para serem ignorados
        ids_to_ignore as 
            (
                select      id 
                
                from        web_user_data 
                
                where       whatsapp_id in (      
                                '5527981191119','5511965232598','5511999069494',
                                '5589988149023','5522999445561','5521994633606',
                                '5511951333281','5511972972331','556799287331',
                                '5527997783037','5511997474870','5527996002253',
                                '5511994667220','5514981106678','5515997272571',
                                '5511972972331','556799287331','5511993958535',
                                '19175769740','558988149023','553197451851','553198935312')
                            or id = 'deleted_user'

            )


        ,total_activities_course as 
        (
            select  count(distinct activity_id) as total_activities,
                    course_id
            from    course_content_with_block_activities_new
            group by course_id

        )

        ,users as 
        (
                select      distinct user_id,
                            activity_id,
                            course_id,
                            classroom_id,
                            whatsapp_id,
                            user_status

                from        user_data  as u 
                inner join  stat as s on u.id = s.user_id 
                where       date(started_at) >= date(now() - interval '3 hour') - interval '7 days'
                and         user_id not in (select * from ids_to_ignore)
        )

        ,count_junc as 
        (
            select u.user_id,
                u.whatsapp_id,
                u.user_status,
                u.course_id,
                classroom_id,
                count(distinct u.activity_id) as activities_done, 
                t.total_activities
            from   users as u 
            left join  total_activities_course as t on u.course_id = t.course_id
            where u.activity_id in (select activity_id from course_content_with_block_activities_new where course_id in (select distinct course_id from users)) 
            and   u.user_id not in (select * from ids_to_ignore)
            group by u.user_id,
                    u.course_id,
                    t.total_activities,
                    u.classroom_id,
                    u.user_status,
                    u.whatsapp_id
        )

        select distinct
            *

        from user_data 
        where id in (select distinct user_id from count_junc where activities_done <> total_activities)
    `);
  return result.rows;
};

const queryOne = async (source, id) => {
  const result = await source.query(
    `
            select *
            from user_data
            where id = $1
          `,
    [id]
  );
  return result.rows[0];
};

export { query, queryOne };
