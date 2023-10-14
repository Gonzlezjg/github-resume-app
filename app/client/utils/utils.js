export function getMostRecentCommit(commits) {
  const sortCommits = [...commits].sort(
    (a, b) =>
      new Date(b.commit.committer.date) - new Date(a.commit.committer.date)
  );

  const mostRecentCommit = sortCommits[0];

  return {
    sha: mostRecentCommit.sha.substring(0, 6),
    committer: mostRecentCommit.commit.committer,
    message: mostRecentCommit.commit.message,
    author: mostRecentCommit.author,
    totalCommits: commits.length,
  };
}
export function timeFormat(isoTime) {
  // Convertir la fecha y hora ISO a un objeto Date
  var dateTime = new Date(isoTime);

  // Obtener la fecha y hora actual
  var now = new Date();

  // Calcular la diferencia de tiempo en segundos
  var diffInSeconds = Math.floor((now - dateTime) / 1000);

  if (diffInSeconds < 60) {
    return 'hace unos segundos';
  } else if (diffInSeconds < 3600) {
    return 'hace ' + Math.floor(diffInSeconds / 60) + ' minutos';
  } else if (diffInSeconds < 86400) {
    return 'hace ' + Math.floor(diffInSeconds / 3600) + ' horas';
  } else if (diffInSeconds < 172800) {
    return 'ayer';
  } else {
    return 'hace ' + Math.floor(diffInSeconds / 86400) + ' días';
  }
}
