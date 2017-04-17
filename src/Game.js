import React from 'react';
import './Game.css';

var wordsList = ["DEBUG", "ABORT", "ACOS", "ACOSH", "ALIASES", "ARGV0", "ASIN", "ASINH", "ASSOC", "AT", "ATAN", "ATAN2", "ATANH", "ATIME", "BASENAME", "BINREAD", "BINWRITE", "BIRTHTIME", "CBRT", "CHDIR", "CHMOD", "CHOWN", "CHROOT", "CLEAR", "COMPILE", "CONSTANTS", "COS", "COSH", "COUNT", "CTIME", "CURRENT", "DAEMON", "DELETE", "DETACH", "DIRNAME", "DISABLE", "DISASM", "DISASSEMBLE", "DUMP", "EACH", "EGID", "EID", "ENABLE", "ENTRIES", "ERF", "ERFC", "ESCAPE", "EUID", "EXCEPTION", "EXCLUSIVE", "EXEC", "EXIT", "EXP", "EXTNAME", "FETCH", "FIND", "FNMATCH", "FOREACH", "FORK", "FREXP", "FTYPE", "GAMMA", "GETEGID", "GETEUID", "GETGID", "GETPGID", "GETPGRP", "GETPRIORITY", "GETRLIMIT", "GETSID", "GETUID", "GETWD", "GID", "GLOB", "GM", "GROUPS", "HOME", "HYPOT", "INDEX", "INITGROUPS", "INSPECT", "INVERT", "ISSETUGID", "JOIN", "KEY", "KEYS", "KILL", "LCHMOD", "LCHOWN", "LDEXP", "LENGTH", "LGAMMA", "LINK", "LIST", "LOAD", "LOCAL", "LOG", "LOG10", "LOG2", "LSTAT", "MAIN", "MAXGROUPS", "MKDIR", "MKFIFO", "MKTIME", "MTIME", "NESTING", "NEW", "NOW", "OF", "OPEN", "PASS", "PATH", "PID", "PIPE", "POLAR", "POPEN", "PPID", "PWD", "QUOTE", "RAND", "RASSOC", "READ", "READLINES", "READLINK", "REALDIRPATH", "REALPATH", "RECT", "RECTANGULAR", "REHASH", "REJECT", "RENAME", "REPLACE", "REPORT", "RESTORE", "RESULT", "RID", "RMDIR", "SELECT", "SETEGID", "SETEUID", "SETGID", "SETPGID", "SETPGRP", "SETPRIORITY", "SETPROCTITLE", "SETREGID", "SETRESGID", "SETRESUID", "SETREUID", "SETRGID", "SETRLIMIT", "SETRUID", "SETSID", "SETUID", "SHIFT", "SIGNAME", "SIN", "SINH", "SIZE", "SPAWN", "SPLIT", "SQRT", "SRAND", "START", "STAT", "STOP", "STORE", "STRESS", "SWITCH", "SYMLINK", "SYSOPEN", "TAN", "TANH", "TIMES", "TRACE", "TRAP", "TRUNCATE", "UID", "UMASK", "UNION", "UNLINK", "UPDATE", "UTC", "UTIME", "VALUES", "WAIT", "WAIT2", "WAITALL", "WAITPID", "WAITPID2", "WRITE", "YIELD", "ARRAY", "COMPLEX", "FLOAT", "HASH", "INTEGER", "RATIONAL", "STRING", "ABS", "ABS2", "ADD", "ADVISE", "ALLOCATE", "ANCESTORS", "ANGLE", "ARG", "ARGS", "ARITY", "ASCTIME", "ATTR", "AUTOLOAD", "B", "BACKTRACE", "BEGIN", "BIND", "BINDING", "BINMODE", "BLKSIZE", "BLOCKS", "BROADCAST", "BSEARCH", "BYTES", "BYTESIZE", "BYTESLICE", "CALL", "CALLCC", "CALLER", "CAPITALIZE", "CAPTURES", "CASECMP", "CATCH", "CAUSE", "CEIL", "CENTER", "CHARS", "CHOMP", "CHOP", "CHR", "CHUNK", "CLASS", "CLONE", "CLOSE", "CODEPOINTS", "COERCE", "COLLECT", "COMBINATION", "COMPACT", "CONCAT", "CONJ", "CONJUGATE", "CONVERT", "CONVPATH", "CRYPT", "CURRY", "CYCLE", "DAY", "DEFAULT", "DENOMINATOR", "DEQ", "DETECT", "DEV", "DIG", "DISPLAY", "DIV", "DIVMOD", "DOWNCASE", "DOWNTO", "DROP", "DUP", "ENCLOSE", "ENCODE", "ENCODING", "END", "ENQ", "EOF", "ERRNO", "EVAL", "EVENT", "EXITSTATUS", "EXTEND", "EXTENDED", "FAIL", "FCNTL", "FDATASYNC", "FDIV", "FEED", "FILENO", "FILL", "FINALIZE", "FINISH", "FIRST", "FLATTEN", "FLOCK", "FLOOR", "FLUSH", "FORMAT", "FREEZE", "FSYNC", "GCD", "GCDLCM", "GETBYTE", "GETC", "GETGM", "GETLOCAL", "GETS", "GETUTC", "GMTIME", "GMTOFF", "GREP", "GROUP", "GSUB", "HASH", "HEX", "HOUR", "I", "ID2NAME", "IMAG", "IMAGINARY", "INCLUDE", "INCLUDED", "INHERITED", "INJECT", "INO", "INSERT", "INTERN", "IOCTL", "ISATTY", "ISDST", "ITSELF", "LABEL", "LAMBDA", "LAST", "LAZY", "LCM", "LINENO", "LINES", "LJUST", "LOCALTIME", "LOCK", "LOOP", "LSTRIP", "MAGNITUDE", "MAP", "MATCH", "MAX", "MDAY", "MEMBERS", "MERGE", "MESSAGE", "METHOD", "METHODS", "MIN", "MINMAX", "MODE", "MODULO", "MON", "MONTH", "NAME", "NAMES", "NEXT", "NLINK", "NSEC", "NUMERATOR", "OCT", "OFFSET", "OPTIONS", "ORD", "OWNER", "P", "PACK", "PARAMETERS", "PARTITION", "PEEK", "PERMUTATION", "PHASE", "POP", "POS", "PRED", "PREPEND", "PREPENDED", "PRINT", "PRINTF", "PRIORITY", "PRIVATE", "PROC", "PRODUCT", "PROTECTED", "PUBLIC", "PUSH", "PUTBACK", "PUTC", "PUTS", "QUO", "RAISE", "RATIONALIZE", "RDEV", "READBYTE", "READCHAR", "READLINE", "READPARTIAL", "REAL", "REASON", "RECEIVER", "REDUCE", "REFINE", "REGEXP", "REMAINDER", "REOPEN", "REPLACEMENT", "REPLICATE", "REQUIRE", "RESUME", "REVERSE", "REWIND", "RINDEX", "RJUST", "ROTATE", "ROUND", "RPARTITION", "RSTRIP", "RUN", "SAMPLE", "SCAN", "SCRUB", "SEC", "SEED", "SEEK", "SELF", "SEND", "SETBYTE", "SHUFFLE", "SIGNAL", "SIGNO", "SLEEP", "SLICE", "SORT", "SOURCE", "SPRINTF", "SQUEEZE", "STATUS", "STEP", "STOPSIG", "STRFTIME", "STRING", "STRIP", "SUB", "SUBSEC", "SUCC", "SUM", "SUPERCLASS", "SWAPCASE", "SYNC", "SYNCHRONIZE", "SYSCALL", "SYSREAD", "SYSSEEK", "SYSTEM", "SYSWRITE", "TAG", "TAINT", "TAKE", "TAP", "TELL", "TERMINATE", "TERMSIG", "TEST", "THROW", "TR", "TRANSFER", "TRANSPOSE", "TRUST", "UNBIND", "UNGETBYTE", "UNGETC", "UNIQ", "UNLOCK", "UNPACK", "UNSHIFT", "UNTAINT", "UNTRUST", "UPCASE", "UPTO", "USEC", "USING", "VALUE", "WAKEUP", "WARN", "WDAY", "YDAY", "YEAR", "ZIP", "ZONE"];
var waitedForTyped = null;
var waitedTypedIndex = null;
var typeAudio = new Audio("http://jsdx.sc.chinaz.com/Files/DownLoad/sound1/201607/7571.mp3");
var pressButtonAudio = new Audio("https://d1490khl9dq1ow.cloudfront.net/sfx/mp3preview/ibm-computer-keyboard-press-enter-key_GJE0qjEd.mp3");
var timer = null;

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameState: 0,
      score: 0,
      word: "",
      timeLeft: 0
    };

    this.handleClickButton = this.handleClickButton.bind(this);
    this.typing = this.typing.bind(this);
    this.loseGame = this.loseGame.bind(this);
  }

  calculateTime() {
    clearInterval(timer);

    this.setState({
      timeLeft: 2
    });

    timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1;
      this.setState({
        timeLeft: timeLeft
      });

      if (timeLeft <= 0) {
        this.loseGame();
      }
    }, 1000);
  }

  handleClickButton(e) {
    if (!this.state.gameState) {
      this.setState({
        gameState: 1,
        score: 0
      });

      this.generateWord();
      window.addEventListener("keydown", this.typing);
    }
  }

  typing(event) {
    typeAudio.currentTime = 0;
    typeAudio.play();
    var typed = String.fromCharCode(event.which);
    var letter = document.getElementById("letter-" + waitedTypedIndex);
    if (typed === waitedForTyped) {
      var word = this.state.word;
      if (waitedTypedIndex !== word.length - 1) {
        letter.classList.remove("wrong");
        letter.classList.add("typed");

        ++waitedTypedIndex;
        waitedForTyped = word[waitedTypedIndex];
      } else {
        pressButtonAudio.currentTime = 0;
        pressButtonAudio.play();
        this.setState((prevState) => {
          return {score: prevState.score + 1};
        });
        this.generateWord();
      }
    } else {
      letter.classList.add("wrong");

      this.setState((prevState) => {
        return {score: prevState.score - 1};
      });      
      
      if (this.state.score < 0) {
        this.loseGame();
      }
    }
  }

  resetSpans() {
    var letters = document.getElementsByTagName("span");
    for (var i = 1; i < letters.length; ++i) {
      letters[i].className = "";
    }
  }

  generateWord() {
    this.resetSpans();
    this.calculateTime();

    var random = Math.floor((Math.random() * wordsList.length)); 
    var word = wordsList[random];
    this.setState({
      word: word
    });

    waitedTypedIndex = 0;
    waitedForTyped = word[waitedTypedIndex];
  }

  loseGame() {
    alert("man, you lose..");
    window.removeEventListener("keydown", this.typing);
    clearInterval(timer);

    this.setState({
      gameState: 0
    });   

    waitedForTyped = null;
    waitedTypedIndex = null;
  }

  render() {
    // hope somebody can optimize these codes
    var word = this.state.word;
    var chars = [];
    for (var i = 0; i < word.length; ++i) {
      chars[i] = word[i];
    }
    var word_spans = chars.map((char, index) => {
      return (<span key={index} id={"letter-" + index}>{char}</span>);
    });

    return (
      <div className="wrapper">
        <h1>Typing Game</h1>
        <p className="comment">Type fastly!</p>
        <button onClick={this.handleClickButton}>START</button>

        <div className="outer-wrap">
          <div className="row">
            <div className="score-wrap">
              Score:<span className="score">{this.state.score}</span>
            </div>
              
            <div className="time-wrap">
              Time left:<span className="time">{this.state.timeLeft}</span>
            </div>
          </div>
        </div>

        <div className="words-wrap">
          {word_spans}
        </div>
      </div>
    );
  }

}

export default Game;