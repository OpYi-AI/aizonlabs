import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kspvbadfinowzmkvqeeh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzcHZiYWRmaW5vd3pta3ZxZWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NDg3NzUsImV4cCI6MjA2NTIyNDc3NX0.BkMWUIm-L3gaV85ZDM_zeIsXYlzdR_0kAWLfg3wdVSc'

export const supabase = createClient(supabaseUrl, supabaseKey)