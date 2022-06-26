const query = (source) => async () => {
  const result = await source.query(`
    with 

    ids_to_ignore as 
        (
            select      id 
            
            from        user_data 
            
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
        
    ,users as 
    (
        select      distinct s.user_id,
                    u.whatsapp_id,
                    s.classroom_id,
                    g.*
        
        from        user_data  as u 
        inner join  stat as s on u.id = s.user_id 
        inner join  classroom as clr on s.classroom_id = clr.id 
        inner join  group_data as g on clr.code = g.code
        where       date(started_at) >= date(now() - interval '3 hour') - interval '7 days'
        and         user_id not in (select * from ids_to_ignore)
    )
    
    select * from user_data
    where id in (select distinct user_id from users)
    `);
  return result;
};

export { query };
