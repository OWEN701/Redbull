/*
  # Create Bookings Table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `name` (text) - Customer name
      - `email` (text) - Customer email address
      - `phone` (text) - Customer phone number
      - `date` (date) - Requested booking date
      - `time` (text) - Requested booking time
      - `party_size` (integer) - Number of guests
      - `notes` (text, optional) - Special requests or dietary requirements
      - `status` (text) - Booking status (pending, confirmed, cancelled)
      - `created_at` (timestamp) - When the booking was requested

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for public inserts (anyone can request a booking)
    - Add policy for authenticated users to view all bookings (for restaurant staff)

  3. Important Notes
    - Public users can only INSERT booking requests
    - Restaurant staff must be authenticated to view bookings
    - All booking requests default to 'pending' status
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  party_size integer NOT NULL CHECK (party_size >= 1 AND party_size <= 20),
  notes text DEFAULT '',
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit booking requests"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
