import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card'; // Optional: if you want a card UI

const Message = () => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending message to:', recipient, 'Message:', message);
    setRecipient('');
    setMessage('');
  };

  return (
    <div className="p-4 flex justify-center">
      <div className="w-full max-w-md border rounded-xl p-6 shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-4 text-center">Send a Message</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="recipient">Recipient</Label>
            <Input
              id="recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Enter recipient's name or email"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here"
              rows={4}
              required
            />
          </div>
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700"
            disabled={!recipient || !message}
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Message;
