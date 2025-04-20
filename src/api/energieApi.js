export const predictEnergyTheft = async (data) => {
    const response = await fetch('http://localhost:5000/api/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  };
  
  const { data } = await predictEnergyTheft({
    timestamp: Date.now(),
    consumption: 1.8,
    voltage: 220,
    // ... other features
  });