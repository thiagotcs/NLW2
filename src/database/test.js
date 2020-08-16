const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
  // Inserir dados

  proffyValue = {
    name: 'Thiago Carvalho',
    avatar:
      'https://avatars3.githubusercontent.com/u/53226663?s=460&u=ae4b0fbaf793c12c7c1018693a143784a1dbb5f5&v=4',
    whatsapp: '44991223708',
    bio:
      'Entusiasta das melhores tecnologias de química avançada. Apaixonado   por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma    das minhas explosões.',
  };

  classValue = {
    subject: 1,
    cost: '20',
  };

  classScheduleValue = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    },
  ];
  // await createProffy(db, { proffyValue, classValue, classScheduleValues });

  // consultar os dados inseridos

  // todos os proffys

  const selectedProffys = await db.all('SELECT * FROM proffys');
  //console.log(selectedProffys);

  // consultar as classes de um determinado professor
  // e trazer junto os dados do professor
  const selectClassesAndProffys = await db.all(`
      SELECT classes.*, proffys.*
      FROM proffys
      JOIN classes ON (classes.proffy_id = proffys.id)
      WHERE classes.proffy_id = 1;
  `);
  //console.log(selectClassesAndProffys);

  // o horário que a pessoa trabaalhar, por exemplo, é das 8h - 18h
  // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
  // o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "1300"
    AND class_schedule.time_to > "1300" 
  
  `);
  //console.log(selectClassesSchedules);
});
