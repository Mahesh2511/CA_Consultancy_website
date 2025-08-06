import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function TaxQueryAssistant() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setStatus('loading');
    setAnswer('');

    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      setAnswer(data.answer);
      setStatus('success');
    } catch (error) {
      console.error(error);
      setAnswer('Sorry, I couldn\'t get an answer right now. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-accent/20">
      <div className="flex items-center mb-4">
        <Sparkles className="h-8 w-8 text-accent mr-3" />
        <h3 className="text-2xl font-bold text-primary">Quick Tax Query Assistant</h3>
      </div>
      <p className="text-gray-600 mb-6">Have a simple tax question? Ask our AI assistant for a quick, informative answer. For complex matters, please schedule a consultation.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., What is the ITR filing deadline?"
            className="flex-grow border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary-hover transition shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {status === 'loading' ? 'Asking...' : 'Ask AI'}
          </button>
        </div>
      </form>

      {status !== 'idle' && (
        <div className="mt-6 p-4 bg-secondary rounded-md border border-gray-200">
          {status === 'loading' && <p className="text-gray-600">Thinking...</p>}
          {status !== 'loading' && answer && (
            <div>
              <h4 className="font-bold text-primary mb-2">Answer:</h4>
              <p className="text-gray-700 whitespace-pre-wrap">{answer}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}