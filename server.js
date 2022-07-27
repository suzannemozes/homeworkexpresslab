// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#language#', '<h2>' + options.language + '</h2>')
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'hypatia') // register the hypatia view engine

// Mount middleware (app.use)


// Mount routes
app.get('/', (req, res) => {
  res.render('template', { title: 'ciao', message: 'piacere', content: 'Sono Suz' })
})

app.get('/ricchi', (req, res) => {
  res.render('copytemplate', { title: 'Ricchi e Poveri', message: 'Sara perche ti amo', content: 'lyric' })
})

app.get('/tozzi', (req, res) => {
  res.render('copytemplate', { title: 'umberto tozzi', message: 'Ti Amo', content: 'lyric' })
})

app.get('/pettenati', (req, res) => {
  res.render('copytemplate', { title: 'Gianni Pettenati', message: 'Bandiera Gialla', content: 'Sì questa sera è festa grande' })
})

app.get('/gaetano', (req, res) => {
  res.render('copytemplate', { title: 'Gaetano', message: 'Ma il cielo è sempre più blu', content: 'Chi vive in baracca, chi suda il salario' })
})

app.get('/feliciano', (req, res) => {
  res.render('copytemplate', { title: 'Jose Feliciano', message: 'Che Sera', content: 'Paese mio che stai sulla collina' })
})

app.get('/celentano', (req, res) => {
  res.render('copytemplate', { title: 'Adriano Celentano', message: 'Azzurro', content: 'Cerco l\'estate tutto l\'anno' })
})

app.get('/modugno', (req, res) => {
  res.render('copytemplate', { title: 'Domenico Modugno', message: 'Nel blu dipinto di blu (Volare)', content: 'Pienso que un sueño parecido no volverá más' })
})

app.get('/mina', (req, res) => {
  res.render('copytemplate', { title: 'Mina', message: 'La Banda', content: 'Una tristezza così non la sentivo da mai' })
})

app.get('/elvis', (req, res) => {
  res.render('copytemplate', { title: 'Elvis', message: 'Torna a Surriento', content: 'But your heart is on fire too' })
})



// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});