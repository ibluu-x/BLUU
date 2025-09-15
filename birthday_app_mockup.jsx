import { useState } from "react";
import { motion } from "framer-motion";

export default function BirthdayApp() {
  const [frame, setFrame] = useState(1);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [princessUnlocked, setPrincessUnlocked] = useState(false);

  // login check
  const handleLogin = () => {
    if (id === "Sweet 29" && pw === "28091996") {
      setFrame(2);
    } else {
      setError("Wrong ID or Password 💔");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      {frame === 1 && (
        <div className="text-center p-6">
          <h1 className="text-xl font-bold text-pink-500 mb-4">
            Happy MINMIN's day ❤
          </h1>
          <input
            placeholder="ID"
            className="border p-2 rounded mb-2 w-full"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            className="border p-2 rounded mb-2 w-full"
            onChange={(e) => setPw(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-pink-400 text-white px-4 py-2 rounded-full shadow"
          >
            Login with Cake 🎂
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}

      {frame === 2 && (
        <div className="text-center p-6">
          <p className="text-lg text-purple-600 mb-6">
            Welcome to your special birthday surprise 🎂💖
          </p>
          <button
            onClick={() => setFrame(3)}
            className="bg-purple-400 text-white px-4 py-2 rounded-full"
          >
            Next
          </button>
        </div>
      )}

      {frame === 3 && (
        <div className="text-center p-6">
          <p className="text-lg mb-6 text-pink-500">
            So... who’s the prettiest girl in the world? 💕
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => alert("Nope, try again cutie 😘")}
              className="border px-4 py-2 rounded-full"
            >
              MINMIN 💕
            </button>

            {!princessUnlocked ? (
              <motion.button
                onClick={() => setPrincessUnlocked(true)}
                animate={{ scale: [1, 1.2, 1, 1.2, 1, 1.2, 1] }}
                transition={{ duration: 2 }}
                className="border px-4 py-2 rounded-full"
              >
                Princess 👑
              </motion.button>
            ) : (
              <motion.button
                onClick={() => setFrame(4)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-pink-400 text-white px-4 py-2 rounded-full shadow"
              >
                Princess 👑
              </motion.button>
            )}

            {princessUnlocked && (
              <p className="mt-4 text-purple-600">
                Because you are always my Princess 👑💕
              </p>
            )}
          </div>
        </div>
      )}

      {frame === 4 && (
        <div className="text-center p-6">
          <p className="text-lg text-pink-500 mb-4">
            On what day did the prettiest angel land on earth? 🌎💕
          </p>
          <input
            type="date"
            className="border p-2 rounded mb-2"
            onChange={(e) => {
              if (e.target.value === "1996-09-28") {
                setFrame(5);
              } else {
                alert("Try again, my love 💕");
              }
            }}
          />
        </div>
      )}

      {frame === 5 && (
        <div className="text-center p-6">
          <motion.div
            className="text-2xl text-purple-600 mb-4"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🌸 💜 🌸
          </motion.div>
          <p className="text-lg text-purple-500 mb-6">You’re amazing, my love 💕</p>
          <button
            onClick={() => setFrame(6)}
            className="bg-purple-400 text-white px-4 py-2 rounded-full"
          >
            💜
          </button>
        </div>
      )}

      {frame === 6 && (
        <div className="text-center p-6">
          <motion.div
            className="w-32 h-32 mx-auto mb-6 bg-pink-200 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
          <p className="text-lg text-pink-500 mb-6">
            Today marks 29 years since the most beautiful angel came to earth 💖
          </p>
          <button
            onClick={() => setFrame(7)}
            className="bg-pink-400 text-white px-4 py-2 rounded-full"
          >
            Next
          </button>
        </div>
      )}

      {frame === 7 && (
        <div className="text-center p-6">
          <p className="text-xl mb-4">
            🎂 Happy Birthday MINMIN 🎂
          </p>
          <p className="mb-6 text-purple-500">
            Wishing you a year full of love, happiness, and endless joy 💕
          </p>
          <button
            onClick={() => setFrame(8)}
            className="bg-purple-400 text-white px-4 py-2 rounded-full"
          >
            Next
          </button>
        </div>
      )}

      {frame === 8 && (
        <div className="text-center p-6">
          <motion.div
            className="text-3xl mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            💕💕💕
          </motion.div>
          <p className="text-lg text-pink-500 mb-6">I love you forever 💖</p>
          <button
            onClick={() => alert("Muahhh 😘")}
            className="bg-pink-400 text-white px-4 py-2 rounded-full"
          >
            Kiss me 💋
          </button>
        </div>
      )}
    </div>
  );
}
