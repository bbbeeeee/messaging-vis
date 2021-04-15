const imessage = require('nodemessage')
const ObjectsToCsv = require('objects-to-csv')

const m = new imessage();
m.getAllMessages().then(messages => {
  console.log("writing to disk")
  const createCsvWriter = require('csv-writer').createObjectCsvWriter;
  const csvWriter = createCsvWriter({
    path: 'out.csv',
    header: [
      { id: "text", title: "text" },
      { id: "account", title: "account" },
      { id: "date", title: "date" },
      { id: "date_delivered", title: "date_delivered" },
      { id: "date_read", title: "date_read" },
      { id: "is_audio_message", title: "is_audio_message" },
      { id: "is_emote", title: "is_emote" },
      { id: "group_title", title: "group_title" },
      { id: "is_from_me", title: "is_from_me" },
    ]
  });

  csvWriter
  .writeRecords(messages)
  .then(()=> console.log('The CSV file was written successfully'));
});
